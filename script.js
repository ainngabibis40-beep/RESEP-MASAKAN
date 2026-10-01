// Data Resep Cemilan
const recipes = [
    {
        id: 1,
        title: "Pisang Coklat Lumer",
        icon: "🍌",
        desc: "Cemilan manis dan renyah dari pisang dan coklat.",
        ingredients: [
            "4 buah pisang kepok (belah dua)",
            "Kulit lumpia secukupnya",
            "Coklat meses atau selai coklat",
            "Minyak untuk menggoreng"
        ],
        instructions: [
            "Siapkan kulit lumpia.",
            "Letakkan pisang di atas kulit lumpia, tambahkan coklat.",
            "Gulung dan lipat kulit lumpia, rekatkan ujungnya dengan sedikit air.",
            "Goreng dalam minyak panas hingga kecoklatan.",
            "Angkat dan sajikan selagi hangat."
        ]
    },
    {
        id: 2,
        title: "Tahu Walik Crispy",
        icon: "🥙",
        desc: "Tahu pong gurih dengan isian aci kenyal.",
        ingredients: [
            "10 buah tahu pong",
            "150gr tepung tapioka",
            "50gr tepung terigu",
            "2 siung bawang putih (haluskan)",
            "Daun bawang secukupnya (iris)",
            "Garam, kaldu bubuk, dan lada secukupnya",
            "Air panas secukupnya"
        ],
        instructions: [
            "Belah tahu pong menjadi dua, lalu balik bagian dalamnya keluar.",
            "Campur tepung tapioka, terigu, bawang putih, daun bawang, garam, dan lada.",
            "Tuang air panas sedikit demi sedikit sambil diaduk hingga menjadi adonan kental.",
            "Masukkan adonan ke dalam tahu yang sudah dibalik.",
            "Goreng hingga krispi dan berwarna keemasan. Sajikan dengan saus sambal."
        ]
    },
    {
        id: 3,
        title: "Jasuke (Jagung Susu Keju)",
        icon: "🌽",
        desc: "Cemilan manis favorit semua kalangan.",
        ingredients: [
            "2 buah jagung manis (pipil)",
            "1 sdm margarin",
            "Susu Kental Manis (SKM) secukupnya",
            "Keju cheddar parut secukupnya"
        ],
        instructions: [
            "Kukus jagung manis yang sudah dipipil selama 15 menit hingga empuk.",
            "Selagi panas, campurkan jagung dengan margarin, aduk rata.",
            "Tuang jagung ke dalam mangkuk kecil.",
            "Tambahkan Susu Kental Manis dan taburan keju parut di atasnya.",
            "Jasuke siap dinikmati."
        ]
    }
];

const recipeGrid = document.getElementById('recipeGrid');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('recipeModal');
const closeBtn = document.querySelector('.close-btn');

// Fungsi untuk menampilkan resep
function displayRecipes(recipeList) {
    recipeGrid.innerHTML = '';
    
    if(recipeList.length === 0) {
        recipeGrid.innerHTML = '<p style="text-align:center; width:100%; color:#888;">Cemilan tidak ditemukan.</p>';
        return;
    }

    recipeList.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <div class="recipe-icon">${recipe.icon}</div>
            <h3>${recipe.title}</h3>
            <p>${recipe.desc}</p>
            <button class="btn-lihat" onclick="openModal(${recipe.id})">Lihat Resep</button>
        `;
        recipeGrid.appendChild(card);
    });
}

// Fitur Pencarian
searchInput.addEventListener('input', (e) => {
    const searchString = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => {
        return recipe.title.toLowerCase().includes(searchString) || 
               recipe.desc.toLowerCase().includes(searchString);
    });
    displayRecipes(filteredRecipes);
});

// Fitur Modal (Pop-up)
function openModal(id) {
    const recipe = recipes.find(r => r.id === id);
    if(recipe) {
        document.getElementById('modalTitle').innerText = recipe.title;
        
        const ingredientsList = document.getElementById('modalIngredients');
        ingredientsList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
        
        const instructionsList = document.getElementById('modalInstructions');
        instructionsList.innerHTML = recipe.instructions.map(inst => `<li>${inst}</li>`).join('');
        
        modal.style.display = 'block';
    }
}

// Tutup Modal
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Tampilkan semua resep saat web pertama kali dimuat
displayRecipes(recipes);
