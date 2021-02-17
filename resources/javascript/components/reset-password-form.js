import axios from 'axios';
import { ResponseAlert } from './alert.js';
import { hideSpinner, showSpinner } from './spinner';
const form = document.querySelector('#reset-password-form');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');

let resetToken = window.location.pathname.split('/');
resetToken = resetToken[resetToken.length - 1];

//alternative listener
//need to wait before submiting form again
const pleaseWaitToSubmitAgain = (e) => {
  e.preventDefault();
  const res = document.createElement('div');
  form.appendChild(res);

  res.className = 'alert alert-warn';
  res.innerHTML = `<p>Molimo Vas sačekajte malo, pre nego što ponovo pošaljete zahtev.</p>`;
  setTimeout(() => {
    res.remove();
  }, 5000);
};

//SUBMIT
form.addEventListener('submit', async function submitForm(e) {
  e.preventDefault();
  ResponseAlert.deletePreviousAlerts();
  showSpinner();

  const data = {
    password: password.value,
    passwordConfirm: passwordConfirm.value,
  };

  //after form submit, prevent next submit for 10sec
  form.removeEventListener('submit', submitForm);
  form.addEventListener('submit', pleaseWaitToSubmitAgain);

  setTimeout(() => {
    form.addEventListener('submit', submitForm);
    form.removeEventListener('submit', pleaseWaitToSubmitAgain);
  }, 10000);

  try {
    await axios.patch(`/api/v1/users/resetPassword/${resetToken}`, data);
    password.value = '';
    passwordConfirm.value = '';

    const res = new ResponseAlert(form, 'custom', {
      class: 'alert-success',
      innerHTML: '<p>Šifra uspešno promenjena.</p>',
    });

    //render success alert
    res.render();
    hideSpinner();

    if (res)
      setTimeout(() => {
        window.location.replace('/eservisnaknjizica');
      }, 1000);

    //remove alert after 5 seconds
    setTimeout(() => {
      res.delete();
    }, 5000);
  } catch (e) {
    let innerHTML =
      '<p>Došlo je do greške. Molimo Vas probajte ponovo kasnije.</p>';
    if (
      e.response.data.message ===
      'sorry time for password reset has expired, please try again'
    )
      innerHTML =
        '<p>Isteklo vreme za resetovanje šifre.<br/> Pošaljite ponovo zahtev.</p>';

    new ResponseAlert(form, 'custom', {
      class: 'alert-fail',
      innerHTML,
    }).render();
    hideSpinner();
  }
});
