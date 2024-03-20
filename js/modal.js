// Модальное окно
const modalIcon = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal');

modalIcon.addEventListener('click', function () {
	this.classList.toggle('modal-icon--active');
	modal.classList.toggle('modal--active');
	document.body.style.overflow = "hidden";
});

// Закрытие модального окна по нажатию на ссылку
const modalLinks = document.querySelectorAll('.modal');

modalLinks.forEach(function (item) {
  item.addEventListener('click', function () {
    modalIcon.classList.remove('modal-icon--active');
    modal.classList.remove('modal--active');
  });
});

modal.addEventListener('transitionend', function () {
  if (!modal.classList.contains('modal--active')) {
    document.body.style.overflow = "auto";
  }
});

const modalBtn = document.querySelector('.modal__btn');
modalBtn.addEventListener('click', function () {
    modalIcon.classList.remove('modal-icon--active');
    modal.classList.remove('modal--active');
  });