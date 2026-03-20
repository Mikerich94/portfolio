document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.normalizeScroll(false);

    const subtitleText = "Intersecting modern design with high-performance, scalable web experiences.";
    const subtitleEl = document.getElementById("subtitle");
    const languageIcons = document.getElementsByClassName("language-icon");

    // Check if about-row is visible on page load
    const aboutRow = document.querySelector(".about-row");
    const aboutInView = aboutRow.getBoundingClientRect().top < window.innerHeight;

    let j = 0;

    function typeSubtitle() {
        if (j < subtitleText.length) {
            subtitleEl.textContent += subtitleText.charAt(j);
            j++;
            setTimeout(typeSubtitle, 25);
        } else {
            // Typing done — only run about animations if about-row is in viewport
            if (aboutInView) {
                runAboutAnimations();
            }
        }
    }

    // Reserve space before typing to prevent layout shift on mobile
    subtitleEl.style.visibility = "hidden";
    subtitleEl.textContent = subtitleText;

    setTimeout(() => {
        subtitleEl.textContent = "";
        subtitleEl.style.visibility = "visible";
        typeSubtitle();
    }, 100);

    function runAboutAnimations() {
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

    // If about-row is NOT in view on load, use ScrollTrigger
    if (!aboutInView) {
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
                    trigger: ".about-row",
                    start: "top 80%",
                    once: true,
                },
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
        yPercent: -20,
        scale: 1.05,
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

function sendEmail() {
    const message = document.getElementById("message").value;
    const subject = "Portfolio website message";
    const mailtoLink = `mailto:richardsmichael94@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
}