import axios from 'axios';

const BASE_URL = 'https://3-w-assignment1-backend.vercel.app';

export const postUserData = (formData) => {
  return axios.post(`${BASE_URL}/app/senddata`, formData);
};

export const loginAdmin = (username, password) => {
  return axios.get(`${BASE_URL}/app/dashboard`, {
    headers: {
      username,
      password,
    },
  });
};

export const fetchUserData = () => {
  return axios.get('/app/dashboard');
};