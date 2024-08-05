import axios from 'axios';

const API_KEY = 'AIzaSyDTbVw2_RZ8YwVol0m41UHxtu0rrfeXYoI';

async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    }
  );
}
