/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
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

//Open samples
// Get all elements with the .sample class
const sampleElements = document.querySelectorAll('.sample');

// Loop through each element and add a click event listener
sampleElements.forEach(element => {
  element.addEventListener('click', function() {
    // Get the PDF URL from the data-pdf attribute
    const pdfUrl = element.getAttribute('data-pdf');

    // Open the PDF file in a new tab
    window.open(pdfUrl, '_blank');
  });
});
