document.addEventListener("DOMContentLoaded", function () {

    // Register FIRST before anything else
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(false);

    //Hero typing animation
    const subtitleText = "Intersecting modern design with high-performance, scalable web experiences.";
    const subtitleEl = document.getElementById("subtitle");

    let j = 0;

    function typeSubtitle() {
        if (j < subtitleText.length) {
            subtitleEl.textContent += subtitleText.charAt(j);
            j++;
            setTimeout(typeSubtitle, 25);
        } else {
            // Typing done — kick off about animations
            runAboutAnimations();
        }
    }

    typeSubtitle();

    function runAboutAnimations() {
        const languageIcons = document.getElementsByClassName("language-icon");

        gsap.fromTo(
            ".section.about ul li",
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                stagger: 0.15,
                ease: "power2.out",
                onComplete: function () {
                    gsap.set(languageIcons, { opacity: 0, y: 20 });
                    gsap.to(languageIcons, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        stagger: 0.2,
                        ease: "power2.out",
                    });
                }
            }
        );
    }

    // Hero buttons
    gsap.fromTo(
        ".hero-buttons .btn",
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            delay: 1.5
        }
    );

    // Hero parallax
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

    // Project cards
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

});

// Send Email with subject from bottom form
function sendEmail() {
    const message = document.getElementById("message").value;
    const subject = "Portfolio website message";
    const mailtoLink = `mailto:richardsmichael94@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}