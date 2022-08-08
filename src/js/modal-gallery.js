(() => {
  const refs = {
    openGalleryBtn: document.querySelector('[data-gallery-open]'),
    closeGalleryBtn: document.querySelector('[data-gallery-close]'),
    gallery: document.querySelector('[data-gallery]'),
    body: document.querySelector('body'),
  };

  refs.openGalleryBtn.addEventListener('click', toggleGallery);
  refs.closeGalleryBtn.addEventListener('click', toggleGallery);

  function toggleGallery() {
    refs.gallery.classList.toggle('gallery__backdrop--hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.open-btn'),
//     closeMenuBtn: document.querySelector('.close-btn'),
//     menu: document.querySelector('.mob-menu'),
//     body: document.querySelector('body'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();
