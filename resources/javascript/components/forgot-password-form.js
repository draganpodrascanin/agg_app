import axios from 'axios';
import { ResponseAlert } from './alert.js';
import { hideSpinner, showSpinner } from './spinner';
const form = document.querySelector('#forgot-password-form');
const email = document.querySelector('#email');

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
    email: email.value,
  };

  //after form submit, prevent next submit for 10sec
  form.removeEventListener('submit', submitForm);
  form.addEventListener('submit', pleaseWaitToSubmitAgain);

  setTimeout(() => {
    form.addEventListener('submit', submitForm);
    form.removeEventListener('submit', pleaseWaitToSubmitAgain);
  }, 10000);

  try {
    await axios.post('/api/v1/users/forgotPassword', data);
    email.value = '';

    const res = new ResponseAlert(form, 'custom', {
      class: 'alert-success',
      innerHTML: '<p>Email sa linkom za resetovanje šifre Vam je poslat.</p>',
    });

    //render success alert
    res.render();
    hideSpinner();

    //remove alert after 5 seconds
    setTimeout(() => {
      res.delete();
    }, 5000);
  } catch (e) {
    new ResponseAlert(form, 'custom', {
      class: 'alert-fail',
      innerHTML:
        '<p>Došlo je do greške. Molimo Vas probajte ponovo kasnije.</p>',
    }).render();
    hideSpinner();
  }
});
