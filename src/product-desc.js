(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-product1-open]'),
    closeModalBtn: document.querySelector('[data-product1-close]'),
    modal: document.querySelector('[data-product1]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();
(() => {
  const refs = {
    openProduct2Btn: document.querySelector('[data-product2-open]'),
    closeProduct2Btn: document.querySelector('[data-product2-close]'),
    product2: document.querySelector('[data-product2]'),
  };

  refs.openProduct2Btn.addEventListener('click', toggleModal);
  refs.closeProduct2Btn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.product2.classList.toggle('is-open');
  }
})();
(() => {
  const refs = {
    openProductBtn: document.querySelector('[data-product3-open]'),
    closeProductBtn: document.querySelector('[data-product3-close]'),
    product: document.querySelector('[data-product3]'),
  };

  refs.openProductBtn.addEventListener('click', toggleModal);
  refs.closeProductBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.product.classList.toggle('is-open');
  }
})();
