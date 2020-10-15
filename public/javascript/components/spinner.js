const spinner = document.querySelector('.lds-ring');
const bg = document.querySelector('.overlay__bg');

export const showSpinner = () => {
  bg.classList.add('overlay__bg--show');
  spinner.classList.add('lds-ring--display');
};

export const hideSpinner = () => {
  bg.classList.remove('overlay__bg--show');
  spinner.classList.remove('lds-ring--display');
};
