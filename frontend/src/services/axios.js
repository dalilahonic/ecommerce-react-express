import axios from 'axios';

console.log('Base URL:', process.env.REACT_APP_BASE_URL);

const api = axios.create({
  baseURL:
    'http://localhost:3012' || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
