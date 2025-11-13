<template>
  <div class="login-container">
    <!-- Left Form -->
    <div class="login-form">
      <div class="logo">BarraGuia</div>
      <h1>¿Olvidaste tu<br />contraseña?</h1>
      <p class="subtitle">Ingresa tu correo electrónico y te enviaremos un enlace para restablecerla.</p>

      <div class="input-group">
        <input
          v-model="email"
          type="email"
          placeholder="example@gmail.com"
        />
      </div>

      <button class="btn-signin" @click="handleRecover">Enviar enlace</button>

      <div class="signup-link">
        ¿Recuerdas tu contraseña? <a href="#" @click.prevent="goToLogin">Inicia sesión</a>
      </div>
    </div>

    <!-- Right Illustration -->
    <div class="illustration">
      <div class="cloud"></div>
      <div class="cloud"></div>
      <div class="cloud"></div>
      <div class="cloud"></div>

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

const router = useRouter()
const email = ref('')

const handleRecover = async () => {
  if (!email.value) {
    alert('Por favor ingresa tu correo electrónico')
    return
  }

  try {
    // Aquí iría tu lógica real: llamar a una API para enviar el enlace
    console.log('Solicitud de recuperación para:', email.value)

    await api.sendPasswordResetEmail(email.value)

    alert('¡Listo! Si el correo existe, recibirás un enlace para restablecer tu contraseña.')
    router.push('/login')
  } catch (error) {
    console.error('Error al enviar el correo de recuperación:', error)
    alert('Ocurrió un error al intentar enviar el enlace de recuperación. Intenta nuevamente.')
  }
}


const goToLogin = () => {
  router.push('/login')
}
</script>

<style scoped>
/* El mismo estilo que ya tenías (sin cambios en CSS) */
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
  background-color: #0a9c22;
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

/* Estilos de ilustración (sin cambios) */
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
  filter: brightness(0.7);
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