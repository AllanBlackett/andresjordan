//*Navigation 
// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }
     
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('#why-choose-1823 .cs-button');
      const boxContents = document.querySelectorAll('#why-choose-1823 .cs-box-content');
  
      // Function to show the corresponding box content and hide others
      function showBoxContent(button) {
          const filterValue = button.getAttribute('data-filter');
  
          boxContents.forEach(box => {
              if (box.getAttribute('data-box') === filterValue) {
                  box.classList.remove('cs-hidden');
              } else {
                  box.classList.add('cs-hidden');
              }
          });
  
          buttons.forEach(btn => {
              if (btn === button) {
                  btn.classList.add('cs-active');
              } else {
                  btn.classList.remove('cs-active');
              }
          });
      }
  
      // Event listeners for screens below 1024px
      if (window.matchMedia('(max-width: 1024px)').matches) {
          buttons.forEach(button => {
              button.addEventListener('click', () => showBoxContent(button));
          });
      }
  
      // Event listeners for screens above 1024px
      if (window.matchMedia('(min-width: 1024px)').matches) {
          buttons.forEach(button => {
              button.addEventListener('mouseover', () => showBoxContent(button));
          });
      }
  });

// Why Choose Us 
function togglePlayButton() {
        // Select all elements with the .cs-picture class
        const pictures = document.querySelectorAll('#why-choose-1840 .cs-video-wrapper');

        // Add a click event listener to each .cs-picture element
        pictures.forEach(picture => {
            picture.addEventListener('click', () => {
                // Select all elements with the .cs-play class
                const playButtons = document.querySelectorAll('#why-choose-1840 .cs-play');

                // Toggle the .cs-hide class on each .cs-play element
                playButtons.forEach(button => {
                    button.classList.toggle('cs-hide');
                });
            });
        });
    }

    // Call the function to activate the event listeners
    togglePlayButton();

    function toggleVideoPlayback() {
        // Select the video element
        const video = document.querySelector('#why-choose-1840 video');

        // Add a click event listener to the video
        video.addEventListener('click', () => {
            // Check if the video is paused
            if (video.paused) {
                video.play(); // Play the video if it is paused
            } else {
                video.pause(); // Pause the video if it is playing
            }
        });
    }

    // Call the function to activate the event listener
    toggleVideoPlayback();
                                
                                
                                  