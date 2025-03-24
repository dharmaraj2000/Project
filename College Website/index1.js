const togglerButton = document.getElementById("navbarToggler");
const navbarMenu = document.getElementById("navbarNav");
const navLinks = document.querySelectorAll(".nav-link"); // Fixed selector
const navLinksContainer = document.getElementById("navLinks");

let isMobileView = false;
let isMenuOpen = false;

function updateView() {
    if (window.innerWidth < 992) {
        isMobileView = true;
        navbarMenu.style.maxHeight = isMenuOpen ? "600px" : "0";
        navbarMenu.style.overflowY = "hidden";
        navbarMenu.style.transition = "max-height 0.5s ease";
        navLinksContainer.classList.remove("flex-row");
        navLinksContainer.classList.add("flex-column");
    } else {
        isMobileView = false;
        navbarMenu.style.maxHeight = "none";
        navbarMenu.style.transition = "none";
        navbarMenu.style.overflowY = "visible";
        navLinksContainer.classList.remove("flex-column");
        navLinksContainer.classList.add("flex-row");
    }
}

togglerButton.addEventListener('click', function () {
    if (isMobileView) {
        isMenuOpen = !isMenuOpen;
        navbarMenu.style.maxHeight = isMenuOpen ? "600px" : "0";
    }
});


navLinks.forEach(link => {
    link.addEventListener("click", function () {
        
        navLinks.forEach(link => link.classList.remove("active-link"));

        this.classList.add("active-link");

        if (isMobileView) {
            isMenuOpen = false;
            navbarMenu.style.maxHeight = "0";
        }
    });
});


document.querySelectorAll('.nav-item.dropdown').forEach(function (dropdown) {
    dropdown.addEventListener('mouseover', function () {
        const menu = new bootstrap.Dropdown(dropdown.querySelector('.dropdown-toggle'));
        menu.show();
    });

    dropdown.addEventListener('mouseleave', function () {
        const menu = new bootstrap.Dropdown(dropdown.querySelector('.dropdown-toggle'));
        menu.hide();
    });
});


if (navLinks.length > 0) {
    navLinks[0].classList.add("active-link");
}


window.addEventListener("resize", updateView);
updateView(); 



updateView();
window.addEventListener("resize", updateView);


document.addEventListener("DOMContentLoaded", () => {
    const newsContent = document.getElementById("news-content");
    const eventsContent = document.getElementById("events-content");
    const eventsBtn = document.getElementById("events-btn");
    const newsBtn = document.getElementById("news-btn");

    // Initially, show News and hide Events
    newsContent.style.display = "block";
    eventsContent.style.display = "none";
    newsBtn.classList.add("btn-dark");
    eventsBtn.classList.add("btn-light");

    // Click event for News button
    newsBtn.addEventListener("click", () => {
        newsContent.style.display = "block";
        eventsContent.style.display = "none";
        newsBtn.classList.add("btn-dark");
        newsBtn.classList.remove("btn-light");
        eventsBtn.classList.add("btn-light");
        eventsBtn.classList.remove("btn-dark");
    });

    // Click event for Events button
    eventsBtn.addEventListener("click", () => {
        newsContent.style.display = "none";
        eventsContent.style.display = "block";
        eventsBtn.classList.add("btn-dark");
        eventsBtn.classList.remove("btn-light");
        newsBtn.classList.add("btn-light");
        newsBtn.classList.remove("btn-dark");
    });
});
    


console.log("Script loaded successfully!");


document.getElementById('view-all-link').addEventListener('click', function () { 
    var newsModal = new bootstrap.Modal(document.getElementById('newsModal'));
    newsModal.show();
});

document.getElementById('view-all-events-link').addEventListener('click', function () {
    var eventsModal = new bootstrap.Modal(document.getElementById('eventsModal'));
    eventsModal.show();  
});



$('.carousel').carousel({
    interval: 2000
});


document.addEventListener("DOMContentLoaded", function () { 
    const sliders = document.querySelectorAll(".sliderr");

    sliders.forEach(slider => {
        const images = slider.querySelectorAll("img.imgslide");
        let currentIndex = 0;

        function showSlide(index) {
            images.forEach((img, i) => {
                img.style.opacity = i === index ? "1" : "0";
                img.style.transition = "opacity 0.5s";
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        }

        // Auto Slide every 3 seconds
        const autoSlideInterval = setInterval(nextSlide, 3000);

        // Buttons
        const prevButton = slider.querySelector("button[onclick^='prevSlide']");
        const nextButton = slider.querySelector("button[onclick^='nextSlide']");

        if (prevButton) prevButton.addEventListener("click", () => { 
            prevSlide();
            clearInterval(autoSlideInterval); // Stop auto-slide when manually controlled
        });

        if (nextButton) nextButton.addEventListener("click", () => { 
            nextSlide();
            clearInterval(autoSlideInterval); // Stop auto-slide when manually controlled
        });

        // Show the first image by default
        showSlide(currentIndex);
    });
});


// document.querySelectorAll('.quick-link-icon').forEach(icon => {
//     icon.addEventListener('click', function () {
//         if (this.classList.contains('clicked')) {
//             this.classList.remove('clicked'); // Remove the rotation if clicked again
//         } else {
//             this.classList.add('clicked');
//         }
//     });
// });



// const images = [
//     "https://www.flaticon.com/free-icon/award_5061123",
//     "https://www.vecteezy.com/vector-art/30795309-color-icon-for-placemenhttps://uxwing.com/placement-icon/",
//     "https://placehold.co/100x100?text=Image4"
// ];


// let currentIndex = 0;

// function changeImage() {
//     const imageElement = document.getElementById('slider-image');
//     currentIndex = (currentIndex + 1) % images.length;
//     imageElement.src = images[currentIndex];
// }

// setInterval(changeImage, 3000);



// const viewCount = 0;

// document.getElementById('videoFrame').addEventListener('click', function () {
//     viewCount++;

//     document.getElementById('viewCount').innerText = viewCount.toLocaleString() + ' Views';
// });




function nextSlide(sliderId) {
    const slider = document.getElementById(sliderId);
    const images = slider.getElementsByTagName('img');
    let currentIndex = Array.from(images).findIndex(image => image.classList.contains('active'));
    images[currentIndex].classList.remove('active');
    const nextIndex = (currentIndex + 1) % images.length;
    images[nextIndex].classList.add('active');
}

function prevSlide(sliderId) {
    const slider = document.getElementById(sliderId);

    const images = slider.getElementsByTagName('img');
    let currentIndex = Array.from(images).findIndex(image => image.classList.contains('active'));
    images[currentIndex].classList.remove('active');
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    images[prevIndex].classList.add('active');
}


// function nextSlide(sliderId) {
//     const slider = document.getElementById('alumni-slider');
//     const images = slider.getElementsByTagName('img');
//     let currentIndex = Array.from(images).findIndex(image => image.classList.contains('active'));
    
//     // Remove the active class with a fade-out effect
//     images[currentIndex].classList.remove('active');
//     images[currentIndex].classList.add('fade-out');
    
//     setTimeout(() => {
//         images[currentIndex].classList.remove('fade-out'); // Remove the fade-out class

//         const nextIndex = (currentIndex + 1) % images.length;
//         images[nextIndex].classList.add('active', 'fade-in');

//         setTimeout(() => {
//             images[nextIndex].classList.remove('fade-in'); // Remove fade-in after animation completes
//         }, 500); // Duration of fade-in effect
//     }, 500); // Duration of fade-out effect
// }

// function prevSlide(sliderId) {
//     const slider = document.getElementById(sliderId);
//     const images = slider.getElementsByTagName('img');
//     let currentIndex = Array.from(images).findIndex(image => image.classList.contains('active'));

//     // Remove the active class with a fade-out effect
//     images[currentIndex].classList.remove('active');
//     images[currentIndex].classList.add('fade-out');

//     setTimeout(() => {
//         images[currentIndex].classList.remove('fade-out'); // Remove the fade-out class

//         const prevIndex = (currentIndex - 1 + images.length) % images.length;
//         images[prevIndex].classList.add('active', 'fade-in');

//         setTimeout(() => {
//             images[prevIndex].classList.remove('fade-in'); // Remove fade-in after animation completes
//         }, 500); // Duration of fade-in effect
//     }, 500); // Duration of fade-out effect
// }