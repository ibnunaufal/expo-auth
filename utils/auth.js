import axios from "axios";

const API_KEY = "AIzaSyBYGeDgdhQa60qoOEcBYzEYM4OVdF03t4A";

export default async function authenthicate(mode, email, password) {
  //   let url =
  //     "https://identitytoolkit.googleapis.com/v1/accounts:"+mode+"?key=" + API_KEY;
  let url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}"`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data)
}

async function createUser(email, password) {
  let url =
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  //   return response
}
