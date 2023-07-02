import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://192.168.43.11:3000/api/',
});

export default customFetch;
