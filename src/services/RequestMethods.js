import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDFmOTY4YjYwNzIzZjQwY2QwNWFhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTY4MzE2NCwiZXhwIjoxNjY1OTQyMzY0fQ.RYqOuqzmXzhbt9l6YAFmc7ZHUn2wiFenlzmRV7XB4gY"
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});