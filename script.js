const translations = {
  ro: {
    nav_gallery: "Galerie",
    nav_shop: "Magazin",
    nav_journal: "Jurnal",
    hero_title: "Elena Homemade decorațiuni",
    hero_subtitle: "Inspirat de liniștea munților",
    hero_cta: "Descoperă Colecția",
    gallery_title: "Povestea în imagini",
    gallery_item1: "Lumânări artizanale",
    gallery_item2: "Tradiție & Cruci",
    gallery_item3: "Atelierul Elenei",
    shop_title: "Colecții",
    product1_title: "Iepuraș de Paște",
    product1_price: "45.00 RON",
    product2_title: "Cruce Textilă",
    product2_price: "60.00 RON",
    product3_title: "Lumânare Florală",
    product3_price: "35.00 RON",
    buy_btn: "Adu-l acasă",
    journal_title: "Jurnal",
    journal_text: "Din inima munților, fiecare piesă este creată cu dragoste, răbdare și respect pentru tradiție.",
    footer_text: "&copy; 2026 Elena Homemade decorațiuni. Din inima Carpaților."
  },
  en: {
    nav_gallery: "Gallery",
    nav_shop: "Shop",
    nav_journal: "Journal",
    hero_title: "Elena Homemade decorations",
    hero_subtitle: "Inspired by mountain silence",
    hero_cta: "Discover the Collection",
    gallery_title: "The Visual Story",
    gallery_item1: "Artisanal Candles",
    gallery_item2: "Tradition & Crosses",
    gallery_item3: "Elena's Workshop",
    shop_title: "Collections",
    product1_title: "Easter Bunny",
    product1_price: "€9.00",
    product2_title: "Textile Cross",
    product2_price: "€12.00",
    product3_title: "Flower Candle",
    product3_price: "€7.00",
    buy_btn: "Bring Home",
    journal_title: "Journal",
    journal_text: "From the heart of the mountains, each piece is created with love, patience, and respect for tradition.",
    footer_text: "&copy; 2026 Elena Homemade decorations. From the heart of the Carpathians."
  }
};

document.addEventListener("DOMContentLoaded", () => {
    const btnRo = document.getElementById("lang-ro");
    const btnEn = document.getElementById("lang-en");
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");

    function setLanguage(lang) {
        // Update active class
        if (lang === 'ro') {
            btnRo.classList.add("active");
            btnEn.classList.remove("active");
        } else {
            btnEn.classList.add("active");
            btnRo.classList.remove("active");
        }

        // Translate elements
        elementsToTranslate.forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
                if (key === 'footer_text') {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        
        // Update document lang
        document.documentElement.lang = lang;
    }

    btnRo.addEventListener("click", () => setLanguage('ro'));
    btnEn.addEventListener("click", () => setLanguage('en'));
});
