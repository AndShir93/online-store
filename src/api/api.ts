import axios from 'axios';


export const storeInstance = axios.create({
  baseURL: 'http://localhost:3030',
});

export const initializationApi = () => storeInstance.interceptors.request.use();
