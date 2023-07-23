import axios from 'axios';

const communityApi = axios.create({
  baseURL: 'http://192.168.0.164:3001/api',
});

export default communityApi;
