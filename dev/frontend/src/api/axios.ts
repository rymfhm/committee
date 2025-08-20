import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE + '/api',
  withCredentials: false
});

api.interceptors.request.use(cfg => {
  const token = localStorage.getItem('token');
  if (token) (cfg.headers as any).Authorization = `Bearer ${token}`;
  return cfg;
});

export default api;


