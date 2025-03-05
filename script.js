
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
});

let slideIndex1 = 1;
let slideIndex2 = 1;

const slides1 = document.getElementsByClassName('slider');
const slides2 = document.getElementsByClassName('slider2');

function showSlides(slides, index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        slides[i].classList.remove('slide-in', 'slide-out-left', 'slide-out-right');
    }

    slides[index - 1].style.display = 'block';
    slides[index - 1].classList.add('slide-in');
}

function plusSlides(slides, indexRef, n) {
    const direction = n > 0 ? 'slide-out-left' : 'slide-out-right';
    const newDirection = n > 0 ? 'slide-in' : 'slide-in';

    slides[indexRef.value - 1].classList.add(direction);

    setTimeout(() => {
        slides[indexRef.value - 1].style.display = 'none';
        slides[indexRef.value - 1].classList.remove(direction);

        indexRef.value += n;
        if (indexRef.value > slides.length) indexRef.value = 1;
        if (indexRef.value < 1) indexRef.value = slides.length;

        slides[indexRef.value - 1].style.display = 'block';
        slides[indexRef.value - 1].classList.add(newDirection);
    }, 1000);
}

 
showSlides(slides1, slideIndex1);
showSlides(slides2, slideIndex2);

setInterval(() => {
    plusSlides(slides1, { value: slideIndex1 }, 1);
    slideIndex1 = (slideIndex1 % slides1.length) + 1;
}, 2000);

setInterval(() => {
    plusSlides(slides2, { value: slideIndex2 }, 1);
    slideIndex2 = (slideIndex2 % slides2.length) + 1;
}, 2000);

document.getElementById("Buynow").addEventListener("click", function () {
    const overlay = document.getElementById("overlay");
    if(overlay.style.display ='none'){
        overlay.style.display = "flex";
        setTimeout(() => {
            window.location.href="https://www.cyberpunk.net/in/en/buy";
        },  3000); 
    }
  });

  function scrollToCommunity() {
    document.getElementById("community").scrollIntoView({ behavior: "smooth" });
}

 

// excluded
const imgElement = document.querySelector('.story_img img');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.left >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', () => {
    if (isElementInViewport(imgElement)) {
        imgElement.classList.add('visible');
        
    } else {
        imgElement.classList.remove('visible');
        
    }
});
// excluded