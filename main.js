

document.addEventListener("DOMContentLoaded", function () {
    //Hero typing animation
    const titleText = "Mike Richards, web developer";
    const subtitleText = "Intersecting modern design with....";

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
        yPercent: -40,
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1.2
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

    //Project cards
gsap.fromTo(
  ".projects-grid .project-card",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out",
    clearProps: "transform",  
    scrollTrigger: {
      trigger: ".projects-grid",
      start: "top 80%",
      once: true,
    }
  }
);

    // About bullets
    gsap.fromTo(
  ".section.about ul li",
  { opacity: 0, x: -30 },
  {
    opacity: 1,
    x: 0,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section.about ul",
      start: "top 80%",
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