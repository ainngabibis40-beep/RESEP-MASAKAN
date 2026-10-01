// Data Resep
const recipes = [
    {
        id: 1,
        title: "Pisang Goreng Crispy",
        category: "cemilan",
        time: "15 Menit",
        image: "https://images.unsplash.com/photo-1528751014936-863e6e4a319c?w=500",
        description: "Pisang balut tepung panir yang renyah di luar dan lembut di dalam."
    },
    {
        id: 2,
        title: "Tahu Cabe Garam",
        category: "cemilan",
        time: "20 Menit",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500",
        description: "Tahu goreng renyah ditumis dengan bawang putih, cabai, dan bumbu gurih."
    },
    {
        id: 3,
        title: "Nasi Goreng Telur Spesial",
        category: "masakan",
        time: "15 Menit",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500",
        description: "Nasi goreng praktis dengan telur, kecap manis, dan daun bawang segar."
    },
    {
        id: 4,
        title: "Es Cincau Hijau",
        category: "minuman",
        time: "10 Menit",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500",
        description: "Minuman segar cincau dengan kuah santan dan gula merah cair."
    }
];

// Tampilkan Semua Resep Saat Pertama Kali Dimuat
document.addEventListener("DOMContentLoaded", () => {
    renderRecipes(recipes);

    // Event Listener untuk Pencarian
    document.getElementById("searchInput").addEventListener("input", (e) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(keyword) || 
            recipe.description.toLowerCase().includes(keyword)
        );
        renderRecipes(filtered);
    });
});

// Fungsi Render Kartu Resep ke HTML
function renderRecipes(items) {
    const grid = document.getElementById("recipeGrid");
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center;'>Resep tidak ditemukan.</p>";
        return;
    }

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="recipe-img">
            <div class="recipe-info">
                <span class="badge">${item.category.toUpperCase()} • ⏱️ ${item.time}</span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Fungsi Filter Berdasarkan Kategori
function filterResep(category) {
    // Ubah status aktif pada tombol
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    if (category === "semua") {
        renderRecipes(recipes);
    } else {
        const filtered = recipes.filter(r => r.category === category);
        renderRecipes(filtered);
    }
}
