
        
 document.addEventListener("DOMContentLoaded", function () {
//Hero typing animation
const titleText = "Welcome to my portfolio site.";
const subtitleText = "Here's where I will show off my coding projects.";

const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");

let i = 0;
let j = 0;

function typeTitle() {
  if (i < titleText.length) {
    titleEl.textContent += titleText.charAt(i);
    i++;
    setTimeout(typeTitle, 50);
  } else {
    setTimeout(typeSubtitle, 500); // wait before starting h3
  }
}

function typeSubtitle() {
  if (j < subtitleText.length) {
    subtitleEl.textContent += subtitleText.charAt(j);
    j++;
    setTimeout(typeSubtitle, 40);
  }
}

typeTitle();

//GSAP 

gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax-img", {
  yPercent: 20, // or -20 to move up
  ease: "none",
  scrollTrigger: {
    trigger: ".hero-container",
    start: "top bottom",   // when top of hero hits bottom of viewport
    end: "bottom top",     // when bottom of hero hits top of viewport
    scrub: true            // smooth scrub based on scroll position
  }
});
            // GSAP animation for hero text 
            gsap.fromTo('.hero-text', 
                { opacity: 0, x: -200 }, 
                { 
                    opacity: 1, 
                    x: 0, 
                    duration: 1, 
                    ease: "power2.out" 
                }
            );

            // GSAP animation for hero image
            gsap.fromTo('.hero-img', 
                { opacity: 0, x: 200 }, 
                { 
                    opacity: 1, 
                    x: 0,
                    duration: 1,
                    ease: "power2.out" 
                }
            );
      

            // GSAP animation for the language cards
           
            const languageCards = document.querySelectorAll('.language-card');

            
            gsap.fromTo(languageCards, 
                { 
                    opacity: 0 
                }, { 
                    opacity: 1,
                    duration: 1,
                    stagger: 0.3, 
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: '.language-card-row', 
                        start: 'top 80%',
                        end: 'bottom 20%',
                        scrub: true, 
                        once: true, 
                    }
                }
            );


           // GSAP animation for the focus cards
           
           const cards = document.querySelectorAll('.card-row .card');

            
gsap.fromTo(cards, 
    { 
        opacity: 0 
    }, { 
        opacity: 1,
        duration: 1,
        stagger: 0.3, 
        ease: "power1.out",
        scrollTrigger: {
            trigger: '.card-row', 
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true, 
            once: true, 
        }
    }
);
   
});

