// Cannabis Products Database
const productsDatabase = [
    {
        id: 1,
        name: "Blue Dream",
        brand: "Premium Farms",
        type: "Hybrid",
        thc: "18-24%",
        cbd: "0.1-0.3%",
        price: "$45",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%234299e1' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='white'%3E🌿%3C/text%3E%3C/svg%3E",
        description: "Blue Dream is a sativa-dominant hybrid that combines the genetics of Blueberry and Haze. Known for its balanced effects and sweet berry aroma, it's perfect for both daytime and evening use.",
        effects: ["Relaxed", "Happy", "Uplifted", "Creative"],
        flavors: ["Berry", "Sweet", "Herbal"],
        rating: 4.5,
        reviewCount: 1247,
        reviews: [
            {
                author: "Sarah M.",
                date: "2025-11-15",
                rating: 5,
                text: "Absolutely love this strain! Perfect balance between relaxation and focus. Great for creative work."
            },
            {
                author: "Mike T.",
                date: "2025-11-10",
                rating: 4,
                text: "Solid strain with nice berry flavor. Effects are smooth and long-lasting."
            },
            {
                author: "Jessica L.",
                date: "2025-11-05",
                rating: 5,
                text: "This is my go-to strain. Helps with anxiety without making me too sleepy."
            }
        ],
        keywords: ["blue dream", "premium farms", "hybrid", "blueberry"]
    },
    {
        id: 2,
        name: "Gelato #33",
        brand: "Cookie Fam Genetics",
        type: "Indica",
        thc: "20-25%",
        cbd: "0.1%",
        price: "$55",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%239f7aea' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='white'%3E🍨%3C/text%3E%3C/svg%3E",
        description: "Gelato #33 is a cross between Sunset Sherbet and Thin Mint GSC. This indica-dominant strain offers a sweet, dessert-like flavor profile with potent relaxing effects.",
        effects: ["Relaxed", "Euphoric", "Sleepy", "Happy"],
        flavors: ["Sweet", "Citrus", "Lavender"],
        rating: 4.8,
        reviewCount: 892,
        reviews: [
            {
                author: "David R.",
                date: "2025-11-18",
                rating: 5,
                text: "Best indica I've tried. Tastes amazing and the effects are exactly what I need for sleep."
            },
            {
                author: "Amanda K.",
                date: "2025-11-12",
                rating: 5,
                text: "The flavor is incredible - sweet and smooth. Very relaxing without being too heavy."
            },
            {
                author: "Chris P.",
                date: "2025-11-08",
                rating: 4,
                text: "Great for evening use. Helps me unwind after a long day."
            }
        ],
        keywords: ["gelato", "cookie fam", "indica", "33", "larry bird"]
    },
    {
        id: 3,
        name: "Sour Diesel",
        brand: "Green Valley",
        type: "Sativa",
        thc: "19-22%",
        cbd: "0.2%",
        price: "$48",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%2348bb78' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='white'%3E⚡%3C/text%3E%3C/svg%3E",
        description: "Sour Diesel is a legendary sativa strain known for its pungent, fuel-like aroma and energizing effects. Perfect for daytime use and creative activities.",
        effects: ["Energetic", "Focused", "Uplifted", "Creative"],
        flavors: ["Diesel", "Pungent", "Citrus"],
        rating: 4.6,
        reviewCount: 1563,
        reviews: [
            {
                author: "Brian W.",
                date: "2025-11-20",
                rating: 5,
                text: "Classic strain that never disappoints. Great energy boost without anxiety."
            },
            {
                author: "Rachel S.",
                date: "2025-11-14",
                rating: 4,
                text: "Perfect for morning use. Helps me stay productive and focused."
            },
            {
                author: "Tom H.",
                date: "2025-11-09",
                rating: 5,
                text: "The taste is unique but amazing. Effects are exactly what I need for daytime."
            }
        ],
        keywords: ["sour diesel", "green valley", "sativa", "diesel", "sour d"]
    },
    {
        id: 4,
        name: "OG Kush",
        brand: "West Coast Collective",
        type: "Hybrid",
        thc: "20-26%",
        cbd: "0.2%",
        price: "$50",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%2338a169' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='white'%3E👑%3C/text%3E%3C/svg%3E",
        description: "OG Kush is a legendary strain with a complex aroma of fuel, skunk, and spice. This hybrid provides a strong euphoric high combined with deep relaxation.",
        effects: ["Euphoric", "Relaxed", "Happy", "Uplifted"],
        flavors: ["Earthy", "Pine", "Woody"],
        rating: 4.7,
        reviewCount: 2104,
        reviews: [
            {
                author: "Jennifer L.",
                date: "2025-11-19",
                rating: 5,
                text: "The original and still the best. Perfect balance of effects."
            },
            {
                author: "Mark D.",
                date: "2025-11-16",
                rating: 5,
                text: "Classic for a reason. Never fails to deliver quality effects."
            },
            {
                author: "Lisa M.",
                date: "2025-11-11",
                rating: 4,
                text: "Strong and reliable strain. Great for stress relief."
            }
        ],
        keywords: ["og kush", "west coast", "hybrid", "kush", "original gangster"]
    },
    {
        id: 5,
        name: "Purple Punch",
        brand: "Symbiotic Genetics",
        type: "Indica",
        thc: "18-20%",
        cbd: "0.1%",
        price: "$52",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%239333ea' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='white'%3E🍇%3C/text%3E%3C/svg%3E",
        description: "Purple Punch is a sweet indica cross of Larry OG and Granddaddy Purple. Known for its grape candy flavor and deeply sedating effects perfect for sleep.",
        effects: ["Sleepy", "Relaxed", "Happy", "Euphoric"],
        flavors: ["Grape", "Blueberry", "Sweet"],
        rating: 4.6,
        reviewCount: 743,
        reviews: [
            {
                author: "Emily R.",
                date: "2025-11-17",
                rating: 5,
                text: "Best strain for sleep I've ever had. Tastes like grape candy!"
            },
            {
                author: "Robert K.",
                date: "2025-11-13",
                rating: 5,
                text: "Incredible flavor and perfect for nighttime. Knocks me out every time."
            },
            {
                author: "Michelle T.",
                date: "2025-11-07",
                rating: 4,
                text: "Very relaxing with amazing taste. Great for insomnia."
            }
        ],
        keywords: ["purple punch", "symbiotic", "indica", "purple", "grape"]
    },
    {
        id: 6,
        name: "Wedding Cake",
        brand: "Seed Junky Genetics",
        type: "Hybrid",
        thc: "21-25%",
        cbd: "0.1%",
        price: "$58",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ed64a6' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='white'%3E🎂%3C/text%3E%3C/svg%3E",
        description: "Wedding Cake is an indica-dominant hybrid with sweet, tangy flavors. Provides a relaxing full-body high with cerebral effects that keep you clear-headed.",
        effects: ["Relaxed", "Happy", "Euphoric", "Uplifted"],
        flavors: ["Sweet", "Vanilla", "Earthy"],
        rating: 4.7,
        reviewCount: 968,
        reviews: [
            {
                author: "Kevin S.",
                date: "2025-11-21",
                rating: 5,
                text: "Amazing taste and perfect hybrid effects. Not too heavy, not too light."
            },
            {
                author: "Nicole B.",
                date: "2025-11-15",
                rating: 5,
                text: "One of my favorites! Sweet flavor and great balanced high."
            },
            {
                author: "Jason M.",
                date: "2025-11-10",
                rating: 4,
                text: "Quality strain with potent effects. Great for evening relaxation."
            }
        ],
        keywords: ["wedding cake", "seed junky", "hybrid", "cake", "pink cookies"]
    },
    {
        id: 7,
        name: "Jack Herer",
        brand: "Sensi Seeds",
        type: "Sativa",
        thc: "17-23%",
        cbd: "0.1-0.3%",
        price: "$46",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ecc94b' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='white'%3E🌟%3C/text%3E%3C/svg%3E",
        description: "Named after cannabis activist Jack Herer, this sativa provides clear-headed, creative effects. Perfect for daytime productivity and social situations.",
        effects: ["Energetic", "Creative", "Uplifted", "Focused"],
        flavors: ["Pine", "Spicy", "Herbal"],
        rating: 4.5,
        reviewCount: 1834,
        reviews: [
            {
                author: "Steven A.",
                date: "2025-11-22",
                rating: 5,
                text: "Classic sativa that delivers every time. Great for getting things done."
            },
            {
                author: "Karen W.",
                date: "2025-11-16",
                rating: 4,
                text: "Nice uplifting effects without paranoia. Good for daytime use."
            },
            {
                author: "Paul G.",
                date: "2025-11-12",
                rating: 5,
                text: "My go-to strain for creativity and focus. Never disappoints."
            }
        ],
        keywords: ["jack herer", "sensi seeds", "sativa", "jack", "herer"]
    },
    {
        id: 8,
        name: "Granddaddy Purple",
        brand: "Ken Estes",
        type: "Indica",
        thc: "17-23%",
        cbd: "0.1%",
        price: "$49",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%236b46c1' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='80' fill='white'%3E💜%3C/text%3E%3C/svg%3E",
        description: "GDP is a famous indica cross of Purple Urkle and Big Bud. Known for its beautiful purple buds and potent relaxation effects, perfect for pain relief and sleep.",
        effects: ["Sleepy", "Relaxed", "Happy", "Euphoric"],
        flavors: ["Grape", "Berry", "Sweet"],
        rating: 4.6,
        reviewCount: 1421,
        reviews: [
            {
                author: "Daniel F.",
                date: "2025-11-20",
                rating: 5,
                text: "Beautiful purple buds with amazing effects. Perfect for pain and sleep."
            },
            {
                author: "Sharon N.",
                date: "2025-11-14",
                rating: 5,
                text: "My favorite indica strain. Grape flavor is amazing and effects are perfect."
            },
            {
                author: "Greg T.",
                date: "2025-11-09",
                rating: 4,
                text: "Strong indica that helps with insomnia. Very relaxing."
            }
        ],
        keywords: ["granddaddy purple", "gdp", "ken estes", "indica", "purple", "granddaddy"]
    }
];

// Function to search products
function searchProducts(query) {
    if (!query || query.trim().length < 2) {
        return [];
    }

    query = query.toLowerCase().trim();
    const words = query.split(/\s+/);

    // Score each product based on keyword matches
    const scoredProducts = productsDatabase.map(product => {
        let score = 0;

        // Check each keyword
        product.keywords.forEach(keyword => {
            if (keyword.includes(query)) {
                score += 10; // Exact keyword match
            }
            words.forEach(word => {
                if (keyword.includes(word)) {
                    score += 5; // Partial match
                }
            });
        });

        // Check product name
        if (product.name.toLowerCase().includes(query)) {
            score += 15;
        }
        words.forEach(word => {
            if (product.name.toLowerCase().includes(word)) {
                score += 7;
            }
        });

        // Check brand
        if (product.brand.toLowerCase().includes(query)) {
            score += 12;
        }
        words.forEach(word => {
            if (product.brand.toLowerCase().includes(word)) {
                score += 6;
            }
        });

        // Check type
        if (product.type.toLowerCase().includes(query)) {
            score += 8;
        }

        return { product, score };
    });

    // Filter products with score > 0 and sort by score
    const results = scoredProducts
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(item => item.product);

    return results;
}

// Function to get product by ID
function getProductById(id) {
    return productsDatabase.find(product => product.id === id);
}
