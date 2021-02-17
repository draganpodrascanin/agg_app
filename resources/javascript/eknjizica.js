import './components/navbar.js';
import './components/modal.js';
import './components/logout.js';

//get statuses from table and translate it
export const statusTranslate = (string) => {
  if (string === 'to-do') return 'Na čekanju';
  if (string === 'in-progress') return 'Radovi u toku';
  if (string === 'waiting-for-parts') return 'Čekanje na delove';
  if (string === 'finished') return 'Završeno';

  return 'status nepoznat';
};

const statuses = document.querySelectorAll('.colJobTicketStatus');
if (statuses[0]) {
  statuses.forEach((statusEl) => {
    statusEl.textContent = statusTranslate(statusEl.textContent);
  });
}
