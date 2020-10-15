import axios from 'axios';
import { hideSpinner, showSpinner } from './spinner';
import { ResponseAlert } from './alert';

const textarea = document.querySelector('#message');
const charLeft = document.querySelector('#char-left');
const charLeftWrapp = document.querySelector('.char-left__wrap');
const form = document.querySelector('#contact');

const name = document.querySelector('#name');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

const deletePreviousAlerts = () => {
  const alerts = document.querySelectorAll('.alert');

  alerts.forEach((alert) => alert.remove());
};

//SHOW HOW MANY MORE CHARS ARE ALOWED (MAX500)
textarea.addEventListener('input', (e) => {
  console.log(e);
  const out = 500 - e.target.value.length;
  charLeft.innerHTML = out;

  if (out === 0) charLeftWrapp.className = 'char-left__wrap red';
  else charLeftWrapp.className = 'char-left__wrap';
});

//alternative listener
//need to wait before submiting form again
const pleaseWaitToSubmitAgain = (e) => {
  e.preventDefault();
  const res = document.createElement('div');
  form.appendChild(res);

  res.className = 'alert-warn';
  res.innerHTML = `<p>Molimo Vas sačekajte malo, pre nego što ponovo pošaljete poruku.</p>`;
  setTimeout(() => {
    res.remove();
  }, 5000);
};

//SUBMIT
form.addEventListener('submit', async function submitForm(e) {
  e.preventDefault();
  deletePreviousAlerts();
  showSpinner();

  const data = {
    name: name.value,
    phone: phone.value,
    email: email.value,
    message: message.value,
  };

  //
  form.removeEventListener('submit', submitForm);
  form.addEventListener('submit', pleaseWaitToSubmitAgain);

  setTimeout(() => {
    form.addEventListener('submit', submitForm);
    form.removeEventListener('submit', pleaseWaitToSubmitAgain);
  }, 10000);

  try {
    await axios.post('/api/v1/contact', data);

    name.value = '';
    phone.value = '';
    email.value = '';
    message.value = '';

    const res = new ResponseAlert(form, 'msg-success');

    //render success alert
    res.render();
    hideSpinner();

    //remove alert after 5 seconds
    setTimeout(() => {
      res.delete();
    }, 5000);
  } catch (e) {
    new ResponseAlert(form, 'msg-fail').render();
    hideSpinner();
  }
});
