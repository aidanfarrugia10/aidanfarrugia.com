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
