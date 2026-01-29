//Images list to add images easily
var carouselImages = [
  {
    src: "IMG_1699.JPG",
    alt: "Driving Car 1"
  },
  {
    src: "IMG_1737.jpg",
    alt: "Driving Car 2"
  },
  {
    src: "IMG_1745.JPG",
    alt: "Driving Car 3"
  },
  {
    src: "IMG_1770.JPG",
    alt: "Driving Car 4"
  }
]

const CLONE_COUNT = 3;
var autoMoveSlide;
document.addEventListener('DOMContentLoaded', () => {
  if (typeof carouselImages === 'undefined' || carouselImages.length === 0) return;

  const track = document.getElementById("carousel-track");

  const realSlides = carouselImages.map(img => createSlide(img));

  const startClones = realSlides.slice(-CLONE_COUNT).map(el => {
    const clone = el.cloneNode(true);
    clone.classList.add('clone');
    return clone;
  });

  const endClones = realSlides.slice(0, CLONE_COUNT).map(el => {
    const clone = el.cloneNode(true);
    clone.classList.add('clone');
    return clone;
  });

  startClones.forEach(s => track.appendChild(s));
  realSlides.forEach(s => track.appendChild(s));
  endClones.forEach(s => track.appendChild(s));



  currentIndex = CLONE_COUNT;
  updateCarousel(false);
autoMoveSlide = setInterval(moveSlide,10000,1,true);
});

function createSlide(img) {
  const slide = document.createElement('div');
  slide.classList.add("carousel-slide");
  slide.innerHTML = `<img src='../images/${img.src}'; alt='${img.alt}';>`;
  return slide;
}

var currentIndex = 0;

function moveSlide(direction,automated) {
  if(automated == undefined){
    console.log("cleared");
    clearInterval(autoMoveSlide);
  }

  if (isTransitioning) return; 
  isTransitioning = true;

  currentIndex += direction;

  updateCarousel(true);


}
var isTransitioning = false;
var lastUpdate = true;
document.getElementById("carousel-track").addEventListener("transitionend", () => {
  isTransitioning = false;
  updateIndex();
});
function updateIndex() {
  const totalRealSlides = carouselImages.length;

  if (currentIndex >= totalRealSlides + CLONE_COUNT) {
    currentIndex = CLONE_COUNT; 
    updateCarousel(false);
  } else if (currentIndex < CLONE_COUNT) {
    currentIndex = totalRealSlides + CLONE_COUNT - 1; 
    updateCarousel(false);
  }
}

function updateCarousel(animate) {


  const track = document.getElementById('carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length === 0) return;

  const slideWidth = slides[0].getBoundingClientRect().width;

  if (animate) {
    track.style.transition = 'transform 0.5s ease-in-out';
  } else {
    track.style.transition = 'none'; 
  }

  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}


// --- TOUCH / SWIPE LOGIC ---
const track = document.getElementById('carousel-track');
let touchStartX = 0;
let touchEndX = 0;

track.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

track.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50; 
    
    if (touchStartX - touchEndX > swipeThreshold) {
        moveSlide(1);
    }
    
    if (touchEndX - touchStartX > swipeThreshold) {
        moveSlide(-1);
    }
}

