

document.addEventListener("DOMContentLoaded", function () {

    //Hero typing animation
    const subtitleText = "Intersecting modern design with high-performance, scalable web experiences.";
    const subtitleEl = document.getElementById("subtitle");

    let j = 0;

    function typeSubtitle() {
        if (j < subtitleText.length) {
            subtitleEl.textContent += subtitleText.charAt(j);
            j++;
            setTimeout(typeSubtitle, 25);
        }
    }


    typeSubtitle();


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

 const languageIcons = document.querySelectorAll('.language-icon');

// set initial state (optional but cleaner)
gsap.set(languageIcons, { opacity: 0, y: 20 });

gsap.to(languageIcons, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.2, // controls delay between each card
    ease: "power2.out",
    delay: 0.5 // optional: waits a bit after page load
});

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




});