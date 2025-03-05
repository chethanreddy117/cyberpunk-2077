import { collection } from './data.mjs';


const container = document.querySelector('.guns');
const model = document.querySelector('.model');
const modelImg = model.querySelector('img');
const prevBtn = model.querySelector('.prev');
const nextBtn = model.querySelector('.next');


document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
    const toggleButton = document.querySelector(".nav-toggle");
    const container = document.querySelector(".container");
    
    toggleButton.addEventListener("click", () => {
        nav.classList.toggle("show");
        if (nav.classList.contains("show")) {
            toggleButton.textContent = "✖";
            container.classList.add("menu-open");  
        } else {
            toggleButton.textContent = "☰";
            container.classList.remove("menu-open");  
        }
    });

    document.getElementById("Buynow").addEventListener("click", function () {
        const overlay = document.getElementById("overlay");
        if (overlay.style.display === 'none' || overlay.style.display === '') {
            overlay.style.display = "flex";
            setTimeout(() => {
                window.location.href = "https://www.cyberpunk.net/in/en/buy";
            }, 3000);
        }
    });
});

 
const body = document.body;

let currentGun = null;
let currentIndex = 0;

// Display all guns (Only first image shown)
function renderGuns() {
    collection.forEach((gun, index) => {
        const gunDiv = document.createElement('div');
        gunDiv.classList.add('gun');
        gunDiv.innerHTML = 
            `
            <img src="../assets/Guns/${gun.icon[0]}" alt="${gun.gunname}">
            <h3>${gun.gunname.toUpperCase()}</h3>
            `;

        gunDiv.addEventListener('click', () => {
            currentGun = gun;
            currentIndex = 0;
            showImage();
            model.style.display = 'flex';
            body.style.overflow='hidden';
            
        });

        container.appendChild(gunDiv);
    });
}

// Show selected image in model
function showImage() {
    modelImg.src = `../assets/Guns/${currentGun.Image[currentIndex]}`;
}

// Close model when clicking outside the image
model.addEventListener('click', (e) => {
    if (e.target === model) { // Check if the click is on the model background
        model.style.display = 'none';
        body.style.overflow='auto';
    }
});

// Navigate images
function navigateImages(direction) {
    if (direction === 'prev') {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : currentGun.Image.length - 1;
    } else if (direction === 'next') {
        currentIndex = (currentIndex < currentGun.Image.length - 1) ? currentIndex + 1 : 0;
    }
    showImage();
}

// Event Listeners for navigation
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();  
    navigateImages('prev');
});
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    navigateImages('next');
});

 
renderGuns();