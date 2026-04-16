document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('mainNav');
  const collapseEl = document.getElementById('navMenu');

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

const container = document.getElementById('image-gallery');
window.lightGallery(container, {
  licenseKey:"GPLv3",
  selector: '.g-item',
  plugins: [
    lgZoom,
    lgThumbnail
  ],
});