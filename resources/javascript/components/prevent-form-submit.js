import { ResponseAlert } from './alert';
//alternative listener
//need to wait before submiting form again
export const pleaseWaitToSubmitAgain = (e, form) => {
  e.preventDefault();
  ResponseAlert.deletePreviousAlerts();

  const res = new ResponseAlert(form, 'msg-warn');
  res.render();

  setTimeout(() => {
    res.delete();
  }, 5000);
};
