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

// ===== Scroll-Spy + Smooth Menu Behavior (Andrés site) =====
(() => {
  const nav = document.getElementById('cs-navigation');
  if (!nav) return;

  // Close the mobile menu when any nav link is clicked
  nav.addEventListener('click', (e) => {
    const link = e.target.closest('a.cs-li-link[href^="#"]');
    if (!link) return;

    // Close only if the mobile menu is open
    const hamburger = nav.querySelector('.cs-toggle');
    const menu = document.getElementById('cs-expanded');

    if (nav.classList.contains('cs-active')) {
      nav.classList.remove('cs-active');
      document.body.classList.remove('cs-open');
      hamburger?.classList.remove('cs-active');
      menu?.setAttribute('aria-expanded', 'false');
      hamburger?.setAttribute('aria-expanded', 'false');
    }
  });

  // ---- Scroll-Spy (set .cs-active on the link whose section is in view) ----
  const LINKS = Array.from(
    nav.querySelectorAll('a.cs-li-link[href^="#"]')
  );
  if (!LINKS.length) return;

  const linkById = new Map(LINKS.map(a => [a.getAttribute('href').slice(1), a]));
  const sections = Array.from(document.querySelectorAll('section[id]'))
    .filter(sec => linkById.has(sec.id));

  const ACTIVE_CLASS = 'cs-active';

  const setActiveLink = (sectionId) => {
    LINKS.forEach(a => {
      const isActive = a.getAttribute('href').slice(1) === sectionId;
      a.classList.toggle(ACTIVE_CLASS, isActive);
      if (isActive) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  };

  const headerHeight = () => nav.offsetHeight || 0;

  let io;
  const buildObserver = () => {
    io?.disconnect();

    io = new IntersectionObserver((entries) => {
  let mostVisible = null;
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    if (!mostVisible || entry.intersectionRatio > mostVisible.intersectionRatio)
      mostVisible = entry;
  }
  if (mostVisible) setActiveLink(mostVisible.target.id);
}, {
  root: null,
  // detect even small visibility at top, good for hero sections
  threshold: [0, 0.1, 0.25, 0.5, 0.75],
  // smaller negative margin so hero counts properly at page top
  rootMargin: `-${headerHeight() * 0.3}px 0px -60% 0px`
});

    sections.forEach(sec => io.observe(sec));
  };

  buildObserver();

  // Fix for "Inicio" not highlighting at very top of page
  const heroLink = linkById.get('hero-2042');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    // if you're within 200px of the very top, force highlight "Inicio"
    if (scrollY < 200 && heroLink) {
      LINKS.forEach(a => a.classList.remove(ACTIVE_CLASS));
      heroLink.classList.add(ACTIVE_CLASS);
    }
  });

  // Rebuild on resize (header height changes by breakpoint)
  let t;
  window.addEventListener('resize', () => {
    clearTimeout(t);
    t = setTimeout(buildObserver, 150);
  });

  // Set initial active link on load (e.g., refresh mid-page)
  if (sections.length) {
    const nearest = sections
      .map(sec => ({ id: sec.id, top: Math.abs(sec.getBoundingClientRect().top - headerHeight()) }))
      .sort((a,b) => a.top - b.top)[0];
    if (nearest) setActiveLink(nearest.id);
  }
})();


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
    
    // FAQ 
    // One-open-only for the whole section
const wrapper = document.querySelector('#faq-1261 .cs-wrapper');

wrapper.addEventListener('click', (e) => {
  const btn = e.target.closest('.cs-button');
  if (!btn) return; // clicked outside a button

  const item = btn.closest('.cs-faq-item');
  const isOpen = item.classList.contains('active');

  // close all
  wrapper.querySelectorAll('.cs-faq-item.active').forEach(i => i.classList.remove('active'));

  // toggle clicked one (re-open only if it wasn't already open)
  if (!isOpen) item.classList.add('active');
});

        

                                
                                  