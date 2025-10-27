document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('mainNavbar');
  const collapseEl = document.getElementById('navbarNav');

  function updateNavbar() {
    if (window.scrollY > 50 || collapseEl.classList.contains('show')) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // scroll updates
  window.addEventListener('scroll', updateNavbar);

  // Bootstrap collapse events fire immediately (no delay)
  collapseEl.addEventListener('show.bs.collapse', () => {
    navbar.classList.add('scrolled');
  });
  collapseEl.addEventListener('hide.bs.collapse', () => {
    if (window.scrollY <= 50) navbar.classList.remove('scrolled');
  });

  // init
  updateNavbar();
});



let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((element) => {
    const minPerSlide = 3
    let next = element.nextElementSibling
    
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        // Makes a clone of it
        let cloneChild = next.cloneNode(true)
        //Appends it
        element.appendChild(cloneChild.children[0])
        //Gets the next next element 
        next = next.nextElementSibling
    }
})
