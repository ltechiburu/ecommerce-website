// client/src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  return response.data;
};
