import axios from 'axios';
import { ResponseAlert } from './alert.js';
import { hideSpinner, showSpinner } from './spinner';
const form = document.querySelector('#login-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

(async function () {
  try {
    const res = await axios.get('/api/v1/users/getMe');
    if (res) window.location.replace(`/eservisnaknjizica`);
  } catch (e) {}
})();

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
  }, 3000);
};

//SUBMIT
form.addEventListener('submit', async function submitForm(e) {
  e.preventDefault();
  ResponseAlert.deletePreviousAlerts();
  showSpinner();

  const data = {
    email: email.value,
    password: password.value,
  };

  //after form submit, prevent next submit for 10sec
  form.removeEventListener('submit', submitForm);
  form.addEventListener('submit', pleaseWaitToSubmitAgain);

  setTimeout(() => {
    form.addEventListener('submit', submitForm);
    form.removeEventListener('submit', pleaseWaitToSubmitAgain);
  }, 10000);

  try {
    await axios.post(`/api/v1/users/login`, data);
    password.email = '';
    password.value = '';

    const res = new ResponseAlert(form, 'custom', {
      class: 'alert-success',
      innerHTML: '<p>Uspešno ulogovani.</p>',
    });

    if (res)
      setTimeout(() => {
        window.location.replace(`/eservisnaknjizica`);
      }, 1000);

    //render success alert
    res.render();
    hideSpinner();

    //remove alert after 5 seconds
    setTimeout(() => {
      res.delete();
    }, 5000);
  } catch (e) {
    console.dir(e);

    let innerHTML =
      '<p>Došlo je do greške. Molimo Vas probajte ponovo kasnije.</p>';

    if (e?.response?.data?.message === 'Wrong password')
      innerHTML = '<p>Pogrešna šifra</p>';
    else if (e?.response?.data?.message === 'User does not exist')
      innerHTML = '<p>Pogrešan email.</p>';

    new ResponseAlert(form, 'custom', {
      class: 'alert-fail',
      innerHTML,
    }).render();
    hideSpinner();
  }
});
