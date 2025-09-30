const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
const platLogos = Array.from(document.querySelectorAll('.logo-plat'));
const goldLogos = Array.from(document.querySelectorAll('.logo-gold'));
const silverLogos = Array.from(document.querySelectorAll('.logo-silver'));
const bronzeLogos = Array.from(document.querySelectorAll('.logo-bronze'));

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (platLogos.indexOf(entry.target) != -1) {
                index = platLogos.indexOf(entry.target);
            } else if (goldLogos.indexOf(entry.target) != -1) {
                index = goldLogos.indexOf(entry.target);
            } else if (silverLogos.indexOf(entry.target) != -1) {
                index = silverLogos.indexOf(entry.target);
            } else if (bronzeLogos.indexOf(entry.target) != -1) {
                index = bronzeLogos.indexOf(entry.target);
            }
            entry.target.style.animationDelay = index * 0.1 + "s";
            entry.target.classList.add('visible-element');
            observer.unobserve(entry.target); // only animate once

        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

elementsToAnimate.forEach(element => {
    element.classList.add('hidden-element'); // Apply initial hidden state
    observer.observe(element);
});