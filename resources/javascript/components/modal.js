import axios from 'axios';
import { pleaseWaitToSubmitAgain } from './prevent-form-submit';
import { hideSpinner, showSpinner } from './spinner';
import { ResponseAlert } from './alert';

const showBtn = document.querySelectorAll('.showModalBtn');
const background = document.querySelector('#modal-background');
const modalBg = document.querySelector('#modal-background');
const modalContainer = document.querySelector('#modal-container');
const charLeft = document.querySelector('#modal-message-char-left');
const charLeftWrapp = document.querySelector('#modal-mscl-wrapper');
const modalForm = document.querySelector('#modal-form');

const inputName = document.querySelector('#modal-name');
const inputPhone = document.querySelector('#modal-phone');
const inputEmail = document.querySelector('#modal-email');
const inputCar = document.querySelector('#modal-car');
const textarea = document.querySelector('#modal-message');

const showModal = () => {
  modalBg.classList.add('modal__bg--show');
  modalContainer.classList.add('modal-container--show');
  modalForm.classList.add('modal-form--show');
};

const hideModal = () => {
  modalBg.classList.remove('modal__bg--show');
  modalContainer.classList.remove('modal-container--show');
  modalForm.classList.remove('modal-form--show');
};

//ad event listener to show modal on all show modal buttons
showBtn.forEach((el) => el.addEventListener('click', showModal));
background.addEventListener('click', hideModal);

window.onkeydown = function (event) {
  if (event.keyCode == 27) {
    hideModal();
  }
};

//alert if phone is not valid
inputPhone.addEventListener('input', () => {
  const prevAlert = document.querySelector('.phone-warn');
  if (prevAlert) prevAlert.remove();

  // not a phone number, allowed numbers only or start with +
  const regex = /(^[0-9]{0,15}$(?![a-zA-Z])|^\+[0-9]{0,15}$(?![a-zA-Z])|$^|^\+$)/;
  if (!regex.test(inputPhone.value)) {
    const res = new ResponseAlert(modalForm, 'custom', {
      class: 'phone-warn',
      innerHTML: '<p>Broj telefona nije validan.</p>',
    });

    res.render();
  }
});

//SHOW HOW MANY MORE CHARS ARE ALOWED (MAX500)
textarea.addEventListener('input', (e) => {
  const out = 500 - e.target.value.length;
  charLeft.innerHTML = out;

  if (out === 0) charLeftWrapp.className = 'char-left__wrap red';
  else charLeftWrapp.className = 'char-left__wrap';
});

modalForm.addEventListener('submit', async function modalFormSubmit(e) {
  e.preventDefault();
  showSpinner();
  ResponseAlert.deletePreviousAlerts();

  const data = {
    name: inputName.value,
    phone: inputPhone.value,
    email: inputEmail.value,
    message: textarea.value,
    car: inputCar.value,
  };

  //block another form submition
  const blockSubmit = (e) => pleaseWaitToSubmitAgain(e, modalForm);
  modalForm.removeEventListener('submit', modalFormSubmit);
  modalForm.addEventListener('submit', blockSubmit);
  //allow submition after 10sec
  setTimeout(() => {
    modalForm.removeEventListener('submit', blockSubmit);
    modalForm.addEventListener('submit', modalFormSubmit);
  }, 10000);

  try {
    await axios.post('/api/v1/messages', data);

    inputName.value = '';
    inputPhone.value = '';
    inputEmail.value = '';
    inputCar.value = '';
    textarea.value = '';
    charLeft.innerHTML = 500;

    const res = new ResponseAlert(modalForm, 'custom', {
      class: 'alert-success',
      innerHTML: 'Zahtev uspešno poslat.',
    });

    res.render();
    hideSpinner();

    setTimeout(() => {
      res.delete();
    }, 5000);
  } catch (e) {
    new ResponseAlert(modalForm, 'msg-fail').render();
    hideSpinner();
  }
});
