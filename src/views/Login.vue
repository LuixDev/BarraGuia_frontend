<template>
  <div class="login-container">
    <!-- Left Form -->
    <div class="login-form">
      <div class="logo">BarraGuia</div>
      <h1>Hola,<br />Bienvenido de nuevo</h1>
      <p class="subtitle">Hola, bienvenido de nuevo a BarraGuia un lugar para conocer la ciudad</p>

      <div class="input-group">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
        />
      </div>
      <div class="input-group">
        <input
          v-model="password"
          type="password"
          placeholder="Contraseña"
        />
      </div>

      <div class="remember-forgot">
        <label class="remember">
          <input v-model="remember" type="checkbox" />
          Recordarme
        </label>
        <a href="#"  class="forgot" @click="handleForgotPassword">¿Olvidaste tu contraseña?</a>
      </div>

      <button class="btn-signin" @click="handleLogin">Iniciar Sesión</button>

      <div class="signup-link">
        ¿No tienes una cuenta? <a @click="handleRegistro" style="cursor: pointer; text-decoration: underline;">Regístrate</a>
      </div>
    </div>

    <!-- Right Illustration -->
    <div class="illustration">
      <div class="cloud"></div>
      <div class="cloud"></div>
      <div class="cloud"></div>
      <div class="cloud"></div>

      <!-- Reemplazamos el .phone por una imagen con overlay de texto -->
<div class="city-image">
  <img src="@/assets/barranquilla.webp" alt="Barranquilla" />
  <div class="city-overlay">
    <h2>Barranquilla</h2>
    <p>La ciudad de la alegría</p>
  </div>
</div>

      <div class="lock"></div>
      <div class="check-bubble">
        <span class="check-mark">✓</span>
      </div>
      <div class="person"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
// Reactive data
const email = ref('')
const password = ref('')
const remember = ref(false)
const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {

    await auth.login(email.value, password.value)
    alert('¡Login exitoso!')
    router.push('/inicio')
  } catch (error) {
    alert(error.message)
  }
}


const handleRegistro = () => {
    router.push('/registro')
}

const handleForgotPassword = () => {
      router.push('/recover')

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.login-container {
  display: flex;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
}

.login-form {
  flex: 1;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
}

.logo {
  color: #0cbb29;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
}

.logo::before {
  content: '■';
  width: 8px;
  height: 8px;
  background-color: #0cbb29;
  border-radius: 2px;
  margin-right: 8px;
}

h1 {
  font-size: 36px;
  font-weight: 700;
  color: #2d3436;
  margin-bottom: 10px;
}

.subtitle {
  color: #636e72;
  font-size: 14px;
  margin-bottom: 40px;
}

.input-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  font-size: 14px;
  transition: border 0.3s;
}

input:focus {
  outline: none;
  border-color: #0cbb29;
}

.remember-forgot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.remember {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2d3436;
  font-size: 14px;
}

.remember input[type='checkbox'] {
  accent-color: #0cbb29;
}

.forgot {
  color: #636e72;
  text-decoration: none;
  font-size: 14px;
}

.forgot:hover {
  text-decoration: underline;
}

.btn-signin {
  background-color: #0cbb29;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-signin:hover {
  background-color: #0cbb29;
}

.signup-link {
  margin-top: 40px;
  text-align: center;
  color: #636e72;
  font-size: 14px;
}

.signup-link a {
  color: #0cbb29;
  text-decoration: none;
  font-weight: 600;
}

.signup-link a:hover {
  text-decoration: underline;
}

.illustration {
  flex: 1;
  background: linear-gradient(135deg, #0cbb29, #a29bfe);
  position: relative;
  overflow: hidden;
}

.cloud {
  position: absolute;
  background: white;
  border-radius: 50%;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

.cloud:nth-child(1) {
  width: 180px;
  height: 100px;
  top: 20px;
  left: 50px;
}
.cloud:nth-child(2) {
  width: 150px;
  height: 80px;
  top: 120px;
  right: 30px;
}
.cloud:nth-child(3) {
  width: 200px;
  height: 120px;
  bottom: 30px;
  left: 100px;
}
.cloud:nth-child(4) {
  width: 120px;
  height: 70px;
  bottom: 80px;
  right: 80px;
}

.city-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 500px;
  border-radius: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  z-index: 2;
  overflow: hidden;
  position: relative;
}

.city-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7); /* Para que el texto se lea mejor */
}

.city-overlay {
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  padding: 20px;
  text-align: center;
  color: white;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  z-index: 3;
}

.city-overlay h2 {
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 5px 0;
}

.city-overlay p {
  font-size: 14px;
  opacity: 0.9;
  margin: 0;
}
.phone::before {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 4px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
}

.fingerprint {
  width: 100px;
  height: 100px;
  border: 4px dashed rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  position: relative;
  margin: 20px 0;
}

.fingerprint::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M30,10 C20,10 10,20 10,30 C10,40 20,50 30,50 C40,50 50,40 50,30 C50,20 40,10 30,10 Z" fill="none" stroke="white" stroke-width="2"/></svg>') no-repeat center;
}

.progress-bar {
  width: 80%;
  height: 6px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  margin: 10px 0;
  overflow: hidden;
}

.progress-fill {
  width: 60%;
  height: 100%;
  background: white;
  border-radius: 3px;
}

.lock {
  position: absolute;
  bottom: 40px;
  right: 40px;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.lock::before {
  content: '';
  position: absolute;
  top: 15px;
  width: 20px;
  height: 20px;
  background: #0cbb29;
  border-radius: 50%;
}
.lock::after {
  content: '';
  position: absolute;
  top: 35px;
  width: 10px;
  height: 10px;
  background: #0cbb29;
  border-radius: 50%;
}

.check-bubble {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 80px;
  height: 80px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  z-index: 3;
}

.check-bubble::before {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 15px solid white;
}

.check-mark {
  color: #0cbb29;
  font-size: 32px;
  font-weight: bold;
}

.person {
  position: absolute;
  bottom: 80px;
  left: 120px;
  width: 120px;
  height: 180px;
  z-index: 4;
}

.person::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="180" viewBox="0 0 120 180"><rect width="120" height="180" fill="none"/><path d="M40,100 L60,80 L80,100 L70,120 L50,120 Z" fill="%23FFC107"/><path d="M50,120 L40,150 L50,170 L60,150 Z" fill="white"/><path d="M70,120 L80,150 L70,170 L60,150 Z" fill="white"/><circle cx="55" cy="90" r="5" fill="black"/><path d="M40,100 L30,110 L35,130 L45,130 Z" fill="black"/></svg>') no-repeat center;
}

/* Responsive */
@media (max-width: 768px) {
  .login-container {
    flex-direction: column;
  }
  .illustration {
    display: none;
  }
  .login-form {
    padding: 40px 20px;
  }
}
</style>