// App State
let currentStream = null;
let currentScreen = 'home';

// DOM Elements
const screens = {
    home: document.getElementById('homeScreen'),
    camera: document.getElementById('cameraScreen'),
    processing: document.getElementById('processingScreen'),
    results: document.getElementById('resultsScreen'),
    noResults: document.getElementById('noResultsScreen')
};

const elements = {
    cameraBtn: document.getElementById('cameraBtn'),
    uploadBtn: document.getElementById('uploadBtn'),
    fileInput: document.getElementById('fileInput'),
    video: document.getElementById('video'),
    canvas: document.getElementById('canvas'),
    captureBtn: document.getElementById('captureBtn'),
    cancelBtn: document.getElementById('cancelBtn'),
    processingStatus: document.getElementById('processingStatus'),
    progressFill: document.getElementById('progressFill'),
    resultsContent: document.getElementById('resultsContent'),
    searchAgainBtn: document.getElementById('searchAgainBtn'),
    retryBtn: document.getElementById('retryBtn')
};

// Screen Management
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
    currentScreen = screenName;
}

// Camera Functions
async function startCamera() {
    try {
        const constraints = {
            video: {
                facingMode: 'environment', // Use back camera on mobile
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            }
        };

        currentStream = await navigator.mediaDevices.getUserMedia(constraints);
        elements.video.srcObject = currentStream;
        showScreen('camera');
    } catch (error) {
        console.error('Camera access error:', error);
        alert('Unable to access camera. Please ensure camera permissions are granted or try uploading an image instead.');
    }
}

function stopCamera() {
    if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
        currentStream = null;
    }
}

function captureImage() {
    const canvas = elements.canvas;
    const video = elements.video;

    // Set canvas size to video size
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame to canvas
    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Stop camera
    stopCamera();

    // Get image data
    canvas.toBlob(processImage, 'image/jpeg', 0.9);
}

// Image Processing
async function processImage(imageBlob) {
    showScreen('processing');
    updateProgress(0, 'Preparing image...');

    try {
        // Convert blob to image URL
        const imageUrl = URL.createObjectURL(imageBlob);

        // Step 1: Extract text using OCR
        updateProgress(20, 'Extracting text from image...');
        const text = await extractText(imageUrl);

        updateProgress(60, 'Searching for product...');
        console.log('Extracted text:', text);

        // Step 2: Search for matching products
        const products = searchProducts(text);

        updateProgress(100, 'Complete!');

        // Clean up
        URL.revokeObjectURL(imageUrl);

        // Show results
        setTimeout(() => {
            if (products.length > 0) {
                displayResults(products[0]); // Show best match
            } else {
                showScreen('noResults');
            }
        }, 500);

    } catch (error) {
        console.error('Processing error:', error);
        alert('Error processing image. Please try again.');
        showScreen('home');
    }
}

async function extractText(imageUrl) {
    try {
        const worker = await Tesseract.createWorker('eng');

        const { data } = await worker.recognize(imageUrl, {
            logger: (m) => {
                if (m.status === 'recognizing text') {
                    const progress = 20 + (m.progress * 40); // 20% to 60%
                    updateProgress(progress, 'Extracting text from image...');
                }
            }
        });

        await worker.terminate();

        return data.text;
    } catch (error) {
        console.error('OCR error:', error);
        throw new Error('Failed to extract text from image');
    }
}

// Progress Updates
function updateProgress(percent, status) {
    elements.progressFill.style.width = `${percent}%`;
    elements.processingStatus.textContent = status;
}

// Display Results
function displayResults(product) {
    const stars = '⭐'.repeat(Math.floor(product.rating));
    const halfStar = product.rating % 1 >= 0.5 ? '½' : '';

    const html = `
        <div class="product-header">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2 class="product-name">${product.name}</h2>
            <p class="product-brand">${product.brand}</p>
            <span class="product-type">${product.type}</span>
        </div>

        <div class="product-details">
            <div class="detail-row">
                <span class="detail-label">Rating</span>
                <div class="rating">
                    <span class="stars">${stars}${halfStar}</span>
                    <span class="rating-value">${product.rating}/5</span>
                    <span class="detail-label">(${product.reviewCount} reviews)</span>
                </div>
            </div>
            <div class="detail-row">
                <span class="detail-label">THC</span>
                <span class="detail-value">${product.thc}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">CBD</span>
                <span class="detail-value">${product.cbd}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Price</span>
                <span class="detail-value">${product.price}</span>
            </div>
        </div>

        <div class="product-description">
            <h3>Description</h3>
            <p>${product.description}</p>
        </div>

        <div class="product-effects">
            <h3>Effects</h3>
            <div class="tags">
                ${product.effects.map(effect => `<span class="tag effect-tag">${effect}</span>`).join('')}
            </div>
        </div>

        <div class="product-flavors">
            <h3>Flavors</h3>
            <div class="tags">
                ${product.flavors.map(flavor => `<span class="tag flavor-tag">${flavor}</span>`).join('')}
            </div>
        </div>

        <div class="reviews-section">
            <h3>Recent Reviews</h3>
            ${product.reviews.map(review => `
                <div class="review">
                    <div class="review-header">
                        <span class="reviewer-name">${review.author}</span>
                        <div class="rating">
                            <span class="stars">${'⭐'.repeat(review.rating)}</span>
                        </div>
                    </div>
                    <p class="review-date">${formatDate(review.date)}</p>
                    <p class="review-text">${review.text}</p>
                </div>
            `).join('')}
        </div>
    `;

    elements.resultsContent.innerHTML = html;
    showScreen('results');
}

// Helper Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString();
}

// Event Listeners
elements.cameraBtn.addEventListener('click', () => {
    startCamera();
});

elements.uploadBtn.addEventListener('click', () => {
    elements.fileInput.click();
});

elements.fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        processImage(file);
    }
});

elements.captureBtn.addEventListener('click', () => {
    captureImage();
});

elements.cancelBtn.addEventListener('click', () => {
    stopCamera();
    showScreen('home');
});

elements.searchAgainBtn.addEventListener('click', () => {
    showScreen('home');
});

elements.retryBtn.addEventListener('click', () => {
    showScreen('home');
});

// PWA Installation
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show install prompt (could add UI for this)
    console.log('App can be installed');
});

window.addEventListener('appinstalled', () => {
    console.log('App installed successfully');
    deferredPrompt = null;
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// Add CSS for tags
const style = document.createElement('style');
style.textContent = `
    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.75rem;
        margin-bottom: 1.5rem;
    }

    .tag {
        padding: 0.5rem 1rem;
        border-radius: 2rem;
        font-size: 0.875rem;
        font-weight: 600;
    }

    .effect-tag {
        background: #dbeafe;
        color: #1e40af;
    }

    .flavor-tag {
        background: #fce7f3;
        color: #9f1239;
    }

    .product-effects h3,
    .product-flavors h3 {
        font-size: 1.25rem;
        color: var(--dark);
    }
`;
document.head.appendChild(style);

// Initialize
console.log('KushSavvy App Initialized');
console.log(`Loaded ${productsDatabase.length} products`);
