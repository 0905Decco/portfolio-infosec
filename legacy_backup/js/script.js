// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.padding = '1rem 5%';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        navbar.style.padding = '1.5rem 5%';
    }
});

// Stats Counter Animation
const stats = document.querySelectorAll('.counter');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const increment = target / 50; // Speed of count

            const updateCounter = () => {
                const c = +counter.innerText;
                if (c < target) {
                    counter.innerText = Math.ceil(c + increment);
                    setTimeout(updateCounter, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
            observer.unobserve(counter); // Only run once
        }
    });
}, observerOptions);

stats.forEach(stat => {
    observer.observe(stat);
});
