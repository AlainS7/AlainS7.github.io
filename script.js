document.addEventListener('DOMContentLoaded', function() {
    // ScrollReveal
    ScrollReveal().reveal('section', { delay: 200, distance: '50px', origin: 'bottom', interval: 200 });

    // Typed.js
    new Typed('#typed', {
        strings: ['Electrical & Computer Engineering Student', 'Computer Science Student', 'Software Developer', 'Cloud Developer', 'Data Engineer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // To top button
    const toTop = document.getElementById('to-top');
    toTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            toTop.classList.remove('opacity-0');
            toTop.classList.add('pointer-events-auto');
        } else {
            toTop.classList.add('opacity-0');
            toTop.classList.remove('pointer-events-auto');
        }
    });

    // Star animation
    const background = document.querySelector('.background');
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.style.left = `${Math.floor(Math.random() * 100)}%`;
        li.style.width = `${Math.floor(Math.random() * 120) + 80}px`;
        li.style.height = li.style.width;
        li.style.bottom = `-${li.style.width}`;
        li.style.animationDelay = `${Math.random() * 30}s`;
        background.appendChild(li);
    }

    // Add shooting stars dynamically
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 5; i++) {
        const shootingStar = document.createElement('div');
        shootingStar.classList.add('shooting-star');
        shootingStar.style.top = `${Math.random() * 100}vh`;
        shootingStar.style.left = `${Math.random() * 100}vw`;
        starsContainer.appendChild(shootingStar);
    }

    // ScrollReveal animations
    ScrollReveal().reveal('.project-card', { delay: 200, distance: '50px', origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('.skill-item', { delay: 100, distance: '20px', origin: 'bottom', interval: 100 });
    ScrollReveal().reveal('#experience .mb-10', { delay: 200, distance: '50px', origin: 'left', interval: 200 });

    // Lazy load images for performance optimization
    const images = document.querySelectorAll('img[data-src]');
    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: '0px 0px 50px 0px',
        threshold: 0.1
    });

    images.forEach(img => observer.observe(img));
});