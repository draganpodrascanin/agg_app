import { ResponseAlert } from './alert.js';
const form = document.querySelector('#login-form');

form.addEventListener('submit', (e) => {
  ResponseAlert.deletePreviousAlerts();
  e.preventDefault();

  const res = new ResponseAlert(form, 'custom', {
    class: 'login-warn',
    innerHTML: 'Pogrešno uneti podaci',
  });

  res.render();
});
