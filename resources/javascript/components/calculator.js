const form = document.querySelector('#form');

const izracunajUstedu = (pot, pred, cbenzin, cplin) => {
  return {
    godisnja: Math.round((pred / 100) * pot * (cbenzin - cplin)),
    mesecna: Math.round(((pred / 100) * pot * (cbenzin - cplin)) / 12),
  };
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const pot = document.querySelector('#potrosnja').value;
  const pred = document.querySelector('#voznja').value;
  const cbenzin = document.querySelector('#cbenzin').value;
  const cplin = document.querySelector('#cplin').value;

  const usteda = izracunajUstedu(pot, pred, cbenzin, cplin);

  const out = document.querySelector('#out');
  out.innerHTML = `<div id="calcoutput">Godišnja ušteda bi iznosila <span class="span--l span--green">${usteda.godisnja}km</span>, a mjesečna <span class="span--l span--green">${usteda.mesecna}km</span>.<br><a href="tel:+38765701308" class="span--blue">Kontaktirajte nas</a> da saznate koliko bi Vas izašla mjesečna rata za ugradnju plinskog sistema.</div>`;

  try {
    const data = {
      priceLPG: cplin,
      pricePetrol: cbenzin,
      fcPer100km: pot,
      kmPerYear: pred,
    };

    await fetch('/api/v1/logs/savingcalc', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (e) {
    console.log('failed to log calc');
  }
});
// Godišnja ušteda bi iznosila <span class="green">${usteda.godisnja}</span>, a mjesečna <span class="green">${usteda.mesecna}</span>.<br><a href="#" class="blue">Kontaktirajte nas</a> da saznate koliko bi Vas koštala mjesečna rata
