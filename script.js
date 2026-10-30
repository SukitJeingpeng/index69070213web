/**
 * Siam Golden Spoon — Authentic Thai Food Menu Randomizer
 * Contains 8 iconic Thai dishes (exceeding the minimum requirement of 5).
 * Updates Food Image, Food Name, Food Description, and Food Price dynamically
 * without reloading the page.
 */

const thaiFoodMenus = [
    {
        id: 1,
        name: "Pad Thai Goong Sod (Royal River Prawn Pad Thai)",
        thaiName: "ผัดไทยกุ้งสด",
        price: "฿185",
        region: "Central Thailand",
        spiceLevel: "🌶️ Mildly Spiced",
        image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=80",
        description: "Wok-charred Chanthaburi rice noodles glazed in a rich tamarind-palm sugar reduction, tossed with succulent grilled river prawns, crispy tofu, roasted peanuts, fresh bean sprouts, and garlic chives.",
        ingredients: ["Chanthaburi Noodles", "River Prawns", "Tamarind Glaze", "Roasted Peanuts", "Fresh Lime"]
    },
    {
        id: 2,
        name: "Tom Yum Goong Nam Khon (Creamy Spicy Prawn Soup)",
        thaiName: "ต้มยำกุ้งน้ำข้น",
        price: "฿240",
        region: "Central & Coastal",
        spiceLevel: "🌶️🌶️🌶️ Fiery & Zesty",
        image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=900&q=80",
        description: "Thailand's iconic aromatic hot and sour soup simmered with fragrant lemongrass, galangal, kaffir lime leaves, crushed bird's eye chilies, straw mushrooms, and jumbo tiger prawns in a roasted chili paste broth.",
        ingredients: ["Tiger Prawns", "Lemongrass", "Galangal", "Kaffir Lime Leaves", "Nam Prik Pao"]
    },
    {
        id: 3,
        name: "Gaeng Keow Wan Gai (Emerald Coconut Green Curry)",
        thaiName: "แกงเขียวหวานไก่ยอดมะพร้าวอ่อน",
        price: "฿195",
        region: "Central Plains",
        spiceLevel: "🌶️🌶️ Medium Hot",
        image: "https://www.cookingwithnart.com/wp-content/uploads/2021/07/Thai-Green-Beef-Curry-with-Eggplant.jpg",
        description: "Velvety freshly pressed coconut cream infused with hand-pounded green chili curry paste, tender free-range chicken, crisp Thai apple eggplants, young coconut shoots, and aromatic sweet basil leaves.",
        ingredients: ["Fresh Coconut Cream", "Green Curry Paste", "Thai Eggplant", "Sweet Basil", "Palm Sugar"]
    },
    {
        id: 4,
        name: "Khao Soi Gai (Chiang Mai Golden Curry Noodles)",
        thaiName: "ข้าวซอยไก่สูตรต้นตำรับเชียงใหม่",
        price: "฿175",
        region: "Northern Lanna",
        spiceLevel: "🌶️🌶️ Aromatic Medium",
        image: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=900&q=80",
        description: "A beloved Northern Thai specialty featuring tender braised chicken drumstick over egg noodles in a fragrant turmeric-cardamom coconut curry broth, crowned with crispy golden noodles, pickled mustard greens, and shallots.",
        ingredients: ["Egg Noodles", "Crispy Noodle Nest", "Turmeric Coconut Broth", "Pickled Mustard Greens", "Roasted Chili Oil"]
    },
    {
        id: 5,
        name: "Som Tum Thai (Zesty Green Papaya Salad)",
        thaiName: "ส้มตำไทยถั่วลิสงคั่ว",
        price: "฿135",
        region: "Northeast Isan",
        spiceLevel: "🌶️🌶️🌶️ Bright & Spicy",
        image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?auto=format&fit=crop&w=900&q=80",
        description: "Crisp hand-shredded green papaya pounded in a clay mortar with garlic, bird's eye chilies, cherry tomatoes, yardlong beans, dried shrimp, toasted peanuts, and a vibrant dressing of lime juice and palm sugar.",
        ingredients: ["Shredded Green Papaya", "Dried Shrimp", "Cherry Tomatoes", "Palm Sugar & Lime", "Toasted Peanuts"]
    },
    {
        id: 6,
        name: "Gaeng Massaman Nuea (Slow-Braised Beef Massaman Curry)",
        thaiName: "แกงมัสมั่นเนื้อน่องลาย",
        price: "฿265",
        region: "Southern Royal Cuisine",
        spiceLevel: "🌶️ Warm & Mild",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
        description: "Rich Persian-inspired royal Thai curry slow-simmered for hours with fork-tender beef shank, roasted cinnamon, star anise, cardamom, baby potatoes, pearl onions, and roasted cashews in coconut cream.",
        ingredients: ["Braised Beef Shank", "Cinnamon & Cardamom", "Baby Potatoes", "Roasted Cashews", "Tamarind Coconut Sauce"]
    },
    {
        id: 7,
        name: "Pad Kra Pao Moo Krob (Crispy Pork Belly Holy Basil)",
        thaiName: "ผัดกะเพราหมูกรอบไข่ดาวกรอบ",
        price: "฿165",
        region: "Bangkok Street Classic",
        spiceLevel: "🌶️🌶️🌶️ Wok-Fired Spicy",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYkBUv42G-5KJA8EDFF6jPDbKKC8-zXzSsOWjacQ_Fg&s=10",
        description: "Crackling golden-roasted pork belly wok-tossed over high flame with crushed garlic, fiery red chilies, and fragrant Thai red holy basil, served over steamed Hom Mali jasmine rice with a crispy-edged fried duck egg.",
        ingredients: ["Crispy Pork Belly", "Thai Holy Basil", "Bird's Eye Chilies", "Hom Mali Rice", "Crispy Duck Egg"]
    },
    {
        id: 8,
        name: "Khao Niaow Ma Muang (Golden Mango Sticky Rice)",
        thaiName: "ข้าวเหนียวมะม่วงน้ำดอกไม้",
        price: "฿150",
        region: "All-Thailand Dessert",
        spiceLevel: "🍯 Sweet & Creamy",
        image: "https://susiecooksthai.com/wp-content/uploads/2024/05/mango-sticky-rice-1200.jpg",
        description: "Ripe, honey-sweet Nam Dok Mai mango slices paired with warm pandan-infused glutinous rice steeped in lightly salted coconut cream and topped with crunchy toasted golden mung beans.",
        ingredients: ["Nam Dok Mai Mango", "Pandan Sticky Rice", "Salted Coconut Cream", "Toasted Mung Beans", "Palm Nectar"]
    }
];

// DOM Elements for Food Information Display
const foodCard = document.getElementById("food-card");
const foodImage = document.getElementById("food-image");
const foodName = document.getElementById("food-name");
const foodThaiName = document.getElementById("food-thai-name");
const foodDescription = document.getElementById("food-description");
const foodPrice = document.getElementById("food-price");
const foodRegion = document.getElementById("food-region");
const foodSpice = document.getElementById("food-spice");
const foodIngredients = document.getElementById("food-ingredients");
const dishCounter = document.getElementById("dish-counter");
const selectionCountEl = document.getElementById("selection-count");

// Buttons & Gallery
const randomBtn = document.getElementById("random-btn");
const navRandomBtn = document.getElementById("nav-random-btn");
const menuGrid = document.getElementById("menu-grid");

// State tracking
let currentMenuIndex = 0;
let totalRandomSelections = 0;
let isAnimating = false;

// Preload all external images for instant transitions
function preloadMenuImages() {
    thaiFoodMenus.forEach((item) => {
        const img = new Image();
        img.src = item.image;
    });
}

// Generate SVG fallback if offline
function createFallbackImage(title, thaiTitle) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2b1b12"/>
                <stop offset="100%" stop-color="#120b07"/>
            </linearGradient>
        </defs>
        <rect width="900" height="650" fill="url(#bg)"/>
        <circle cx="450" cy="280" r="140" fill="rgba(245,176,65,0.12)" stroke="#f5b041" stroke-width="2"/>
        <text x="450" y="295" text-anchor="middle" font-size="72">🍲</text>
        <text x="450" y="480" text-anchor="middle" fill="#fad7a0" font-family="sans-serif" font-size="30" font-weight="bold">${title}</text>
        <text x="450" y="525" text-anchor="middle" fill="#f5b041" font-family="sans-serif" font-size="24">${thaiTitle}</text>
    </svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// Render the full menu gallery cards below the main showcase
function renderMenuGallery() {
    menuGrid.innerHTML = "";
    thaiFoodMenus.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = `menu-mini-card ${index === currentMenuIndex ? "active-dish" : ""}`;
        card.dataset.index = index;

        card.innerHTML = `
            <div class="mini-img-wrap">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="mini-price-tag">${item.price}</span>
            </div>
            <div class="mini-card-body">
                <span class="mini-card-thai">${item.thaiName}</span>
                <h3 class="mini-card-title">${item.name}</h3>
                <p class="mini-card-desc">${item.description}</p>
            </div>
        `;

        const imgEl = card.querySelector("img");
        imgEl.addEventListener("error", () => {
            imgEl.src = createFallbackImage(item.name, item.thaiName);
        });

        card.addEventListener("click", () => {
            if (index !== currentMenuIndex) {
                updateDisplayedFood(index, true);
                document.getElementById("featured").scrollIntoView({ behavior: "smooth", block: "center" });
            }
        });

        menuGrid.appendChild(card);
    });
}

// Update active highlight on gallery cards
function updateGalleryHighlight(activeIndex) {
    const cards = menuGrid.querySelectorAll(".menu-mini-card");
    cards.forEach((card, idx) => {
        card.classList.toggle("active-dish", idx === activeIndex);
    });
}

/**
 * Updates the displayed Food Image, Food Name, Food Description, and Food Price
 * without reloading the page.
 */
function updateDisplayedFood(newIndex, animate = true) {
    const selectedFood = thaiFoodMenus[newIndex];
    currentMenuIndex = newIndex;

    const applyContent = () => {
        // 1. Update Food Image
        foodImage.onerror = () => {
            foodImage.src = createFallbackImage(selectedFood.name, selectedFood.thaiName);
        };
        foodImage.src = selectedFood.image;
        foodImage.alt = selectedFood.name;

        // 2. Update Food Name
        foodName.textContent = selectedFood.name;
        foodThaiName.textContent = selectedFood.thaiName;

        // 3. Update Food Description
        foodDescription.textContent = selectedFood.description;

        // 4. Update Food Price
        foodPrice.textContent = selectedFood.price;

        // Update supplementary badges & ingredients
        foodRegion.textContent = `📍 ${selectedFood.region}`;
        foodSpice.textContent = selectedFood.spiceLevel;
        dishCounter.textContent = `Menu #${selectedFood.id} of ${thaiFoodMenus.length}`;

        foodIngredients.innerHTML = selectedFood.ingredients
            .map((ing) => `<span class="ingredient-tag">${ing}</span>`)
            .join("");

        updateGalleryHighlight(newIndex);
    };

    if (!animate) {
        applyContent();
        return;
    }

    isAnimating = true;
    foodCard.classList.add("is-updating");
    randomBtn.classList.add("spinning");

    setTimeout(() => {
        applyContent();
        foodCard.classList.remove("is-updating");
    }, 180);

    setTimeout(() => {
        randomBtn.classList.remove("spinning");
        isAnimating = false;
    }, 420);
}

/**
 * Core Feature: Random Food Selection
 * Selects a random food menu guaranteed to be different from the current one
 * so that Image, Name, Description, and Price always change on every click.
 */
function handleRandomFoodSelection() {
    if (isAnimating) return;

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * thaiFoodMenus.length);
    } while (randomIndex === currentMenuIndex && thaiFoodMenus.length > 1);

    totalRandomSelections += 1;
    selectionCountEl.textContent = `Randomly discovered: ${totalRandomSelections} ${totalRandomSelections === 1 ? "time" : "times"}`;

    updateDisplayedFood(randomIndex, true);
}

// Event Listeners (no page reload)
randomBtn.addEventListener("click", handleRandomFoodSelection);
navRandomBtn.addEventListener("click", () => {
    handleRandomFoodSelection();
    document.getElementById("featured").scrollIntoView({ behavior: "smooth", block: "center" });
});

// Initialize page on load
preloadMenuImages();
renderMenuGallery();
updateDisplayedFood(0, false);
