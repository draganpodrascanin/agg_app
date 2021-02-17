import axios from 'axios';
const logoutBtn = document.querySelector('#logout');

if (logoutBtn)
  logoutBtn.addEventListener('click', async () => {
    try {
      const res = await axios.post('/api/v1/users/logout');
      if (res) window.location.replace('/userlogin');
    } catch (e) {
      console.log(e);
    }
  });
