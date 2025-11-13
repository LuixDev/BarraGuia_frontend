// src/stores/auth.js

import { defineStore } from 'pinia'
import api from '@/api/auth'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: null,
    loading: false
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
  async login(email, password) {
    try {
      const response = await api.post('/login', {
        email,
        password
      }); 
      this.token = response.data.token;
      localStorage.setItem('token', this.token);
      await this.fetchUser();
    } catch (error) {
      console.error(error);
      throw new Error('Error al iniciar sesión');
    }
  },



async register(name, email, password) {
  try {
    const response = await api.post('/register', {
      name,
      email,
      password,
      password_confirmation: password
    });

    this.token = response.data.token;
    this.user = response.data.user;
    localStorage.setItem('token', this.token);

    // Mensaje de éxito
    alert('Registro exitoso'); // <-- Aquí se muestra el mensaje
    router.push('/inicio');
  } catch (error) {
    console.error(error);
    alert('Error al registrar el usuario');
  }
},

sendPasswordResetEmail(email) {
  return api.post('/forgot-password', { email });
},

resetPassword(token, email, password) {     
  return api.post('/reset-password', {
    token,
    email,
    password,
    password_confirmation: password
  });
},

    // ✅ Ahora fetchUser está DENTRO de actions
async fetchUser() {
  try {
    const token = localStorage.getItem('token')
    const res = await api.get('/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    this.user = res.data
  } catch (error) {
    console.log(error)
  }
}
,
    // ✅ Y logout también
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
      // Opcional: api.post('/logout') si tienes ese endpoint
    }
  } // ← actions cierra aquí
})