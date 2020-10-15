//alternative listener
//need to wait before submiting form again
export const pleaseWaitToSubmitAgain = (e) => {
  e.preventDefault();
  const res = document.createElement('div');
  form.appendChild(res);

  res.className = 'alert-warn';
  res.innerHTML = `<p>Molimo Vas sačekajte malo, pre nego što ponovo pošaljete poruku.</p>`;
  setTimeout(() => {
    res.remove();
  }, 5000);
};
