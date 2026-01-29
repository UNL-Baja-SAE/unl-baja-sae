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
  ,
  {
    src: "carousel/image01.webp",
    alt: "Driving Car 4"
  }
  ,
  {
    src: "carousel/image02.webp",
    alt: "Driving Car 4"
  }
  ,
  {
    src: "carousel/image03.webp",
    alt: "Driving Car 4"
  }
  ,
  {
    src: "carousel/image04.webp",
    alt: "Driving Car 4"
  }
  ,
  {
    src: "carousel/image05.webp",
    alt: "Driving Car 4"
  }
  ,
  {
    src: "carousel/image06.webp",
    alt: "Driving Car 4"
  }
  
]

const CLONE_COUNT = 3;
var autoMoveSlide;
document.addEventListener('DOMContentLoaded', () => {
  var mainCarousel = document.getElementById("main-carousel");

  carouselImages.forEach((image) => {
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("carousel-cell","m-2");
    let imageCell = document.createElement("img");
    imageCell.src = "../images/"+image.src;
    imageCell.classList.add('img-fluid');
    imageDiv.appendChild(imageCell);
    mainCarousel.appendChild(imageDiv);
  })

var flkty = new Flickity(mainCarousel, {
  // options
  wrapAround: true,
  contain: true,
  autoPlay: true,
  imagesLoaded: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity('.main-carousel', {
  // options
});
})
