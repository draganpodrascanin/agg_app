var nav = document.querySelector('#nav');

var uslugeBtn = document.querySelector('#uslugeBtn');
var usluge = document.querySelector('#nav__usluge');
var uslugeLinks = document.querySelectorAll('.nav__usluge__link');

// NAV BACKGROUND
function showNavBackground(nav) {
  if (!nav.className.match(/\bnav--show\b/)) nav.classList.add('nav--show');
}

function hideNavBackground(nav) {
  if (
    nav.className.match(/\bnav--show\b/) &&
    !usluge.className.match(/\bnav__usluge--show\b/)
  )
    nav.classList.remove('nav--show');
}

//show nav background if Y offset is more than 10
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10) return showNavBackground(nav);

  return hideNavBackground(nav);
});

//
function toggleUsluge(usluge, uslugeLinks, nav) {
  if (!nav.className.match(/\bnav--show\b/)) nav.classList.add('nav--show');

  if (
    window.pageYOffset < 10 &&
    usluge.className.match(/\bnav__usluge--show\b/)
  ) {
    nav.classList.remove('nav--show');
  }

  usluge.classList.toggle('nav__usluge--show');

  //   setTimeout(() => {
  uslugeLinks.forEach(function (usluga) {
    usluga.classList.toggle('nav__usluge__link--show');
  });
  //   }, 200);
}

uslugeBtn.addEventListener('click', function () {
  toggleUsluge(usluge, uslugeLinks, nav);
});
