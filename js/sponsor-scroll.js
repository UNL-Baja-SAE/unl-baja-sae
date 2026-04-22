const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
const logos = Array.from(document.querySelectorAll('.logo'));

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = logos.indexOf(entry.target) * 0.1 + "s";
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