// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

function reveal() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            // Optionally remove if you want it to trigger every time
            // reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Nav Dot Active State
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.dot');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    dots.forEach(dot => {
        dot.classList.remove('active');
        if (dot.getAttribute('href').includes(current)) {
            dot.classList.add('active');
        }
    });
});

// Smooth Scroll for dots (handled by CSS scroll-behavior usually, but let's be explicit)
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = dot.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
