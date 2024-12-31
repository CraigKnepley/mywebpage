//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Dynamically assign CSS variable to data img
document.querySelectorAll('.cert-item').forEach(item => {
    const imgPath = item.getAttribute('data-img');
    console.log(`Image path: ${imgPath}`);
    item.style.setProperty('--cert-img', `url(${imgPath})`);
});

//Carousel functionality
let currentSlide = 0; // Start with the first slide

const slides = document.querySelectorAll('.carousel-slide'); // Select all the slides
const totalSlides = slides.length;

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

function showSlide(index) {
  // Prevent going out of bounds
  if (index < 0) {
    currentSlide = totalSlides - 1; // Go to the last slide if going backward past the first
  } else if (index >= totalSlides) {
    currentSlide = 0; // Go to the first slide if going forward past the last
  } else {
    currentSlide = index;
  }

  // Move the carousel container to the current slide
  const offset = -currentSlide * 100; // Shift by 100% per slide
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
  console.log(`Current slide: ${currentSlide}, Offset: ${offset}%`);
}

// Event listeners for the buttons
prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1); // Go to the previous slide
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1); // Go to the next slide
});
