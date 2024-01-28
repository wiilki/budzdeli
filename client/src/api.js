// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: '/api', // Set this to match your Express route
});

export const fetchData = async (route) => {
  try {
    const response = await instance.get(route);
    return response.data;
  } catch (error) {
    throw error;
  }
};
