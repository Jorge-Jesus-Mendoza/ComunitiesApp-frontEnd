import axios from 'axios';

const customFetch = axios.create({
  baseURL: 'http://192.168.1.4:3000/api/',
});

export default customFetch;
