'use strict';

const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.backdrop');
const btnCloseModalWindow = document.querySelector('.modal-btn');
const btnsShowModalWindow = document.querySelectorAll('.main-block-btn');
const menuWindow = document.querySelector('.window-mob-menu');
const btnCloseMenuWindow = document.querySelector('.mob-menu-btn');
const btnShowMenuWindow = document.querySelectorAll('.mob-menu-btn-open');
console.log(btnShowMenuWindow);
console.log(btnsShowModalWindow);

const showModalWindow = function () {
  modalWindow.classList.add('is-hiden');
  //  modalWindow.style.display = 'block';
  overlay.classList.add('is-hiden');
};

const closeModalWindow = function () {
  modalWindow.classList.remove('is-hiden');
  overlay.classList.remove('is-hiden');
};

for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].addEventListener('click', showModalWindow);
}

btnCloseModalWindow.addEventListener('click', closeModalWindow);

overlay.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalWindow.classList.contains('is-hiden')) {
    closeModalWindow();
  }
});

const showMenuWindow = function () {
  menuWindow.classList.add('is-hiden');
};

const closeMenuWindow = function () {
  menuWindow.classList.remove('is-hiden');
};

for (let i = 0; i < btnShowMenuWindow.length; i++) {
  btnShowMenuWindow[i].addEventListener('click', showMenuWindow);
}

btnCloseMenuWindow.addEventListener('click', closeMenuWindow);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !menuWindow.classList.contains('is-hiden')) {
    closeMenuWindow();
  }
});
