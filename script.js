document.querySelectorAll('.client-logo').forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        document.querySelectorAll('.client-logo img').forEach(img => {
            img.style.transition = 'filter 0.6s ease-in-out, transform 0.6s ease-in-out, opacity 0.6s ease-in-out';
            img.style.filter = 'grayscale(100%) blur(3px)';
            img.style.transform = 'scale(0.9)';
            img.style.opacity = '0.6';
        });
        logo.querySelector('img').style.filter = 'grayscale(0) blur(0)';
        logo.querySelector('img').style.transform = 'scale(1.2)';
        logo.querySelector('img').style.opacity = '1';
    });

    logo.addEventListener('mouseleave', () => {
        document.querySelectorAll('.client-logo img').forEach(img => {
            img.style.filter = 'grayscale(0) blur(0)';
            img.style.transform = 'scale(1)';
            img.style.opacity = '1';
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const careerItems = document.querySelectorAll("#career .col-md-4");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8; // Adjust based on how soon you want the effect to trigger

        careerItems.forEach(item => {
            const boxTop = item.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    }

    // Check visibility on scroll and resize
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    checkVisibility(); // Initial check on page load
});


document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll("#skills .skill-item");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.8; // Trigger when 80% of the viewport height is reached

        skillItems.forEach(item => {
            const boxTop = item.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                item.classList.add("visible");
            } else {
                item.classList.remove("visible");
            }
        });
    }

    // Check visibility on scroll and resize
    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);
    checkVisibility(); // Initial check on page load
});

document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.innerWidth <= 767;
    const logos = document.querySelectorAll('.client-logo img');

    if (isMobile) {
        // Mobile Scroll Effect using IntersectionObserver
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.6 // Trigger when 60% of the logo is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = 'scale(1.2)';
                    entry.target.style.filter = 'grayscale(0) blur(0)';
                    entry.target.style.opacity = '1';
                } else {
                    entry.target.style.transform = 'scale(1)';
                    entry.target.style.filter = 'grayscale(100%) blur(3px)';
                    entry.target.style.opacity = '0.6';
                }
            });
        }, observerOptions);

        // Observe each logo
        logos.forEach(logo => observer.observe(logo));
    } else {
        // Desktop Hover Effect
        logos.forEach(logo => {
            logo.addEventListener('mouseenter', () => {
                logos.forEach(img => {
                    img.style.filter = 'grayscale(100%) blur(3px)';
                    img.style.transform = 'scale(0.9)';
                    img.style.opacity = '0.6';
                });
                logo.style.filter = 'grayscale(0) blur(0)';
                logo.style.transform = 'scale(1.2)';
                logo.style.opacity = '1';
            });

            logo.addEventListener('mouseleave', () => {
                logos.forEach(img => {
                    img.style.filter = 'grayscale(0) blur(0)';
                    img.style.transform = 'scale(1)';
                    img.style.opacity = '1';
                });
            });
        });
    }
});