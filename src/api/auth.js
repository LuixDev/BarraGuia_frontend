// src/api/auth.js
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 👈 usa VITE_ para que funcione
  headers: {
    'Content-Type': 'application/json'
  }
})

// 👇 Interceptador para añadir el token DINÁMICAMENTE (no al crear la instancia)
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})


// src/api/auth.js (agrega esto al final)
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Token inválido o expirado
    }
    return Promise.reject(error)
  }
)
export default api