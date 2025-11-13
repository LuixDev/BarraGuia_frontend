<!-- Footer.vue -->
<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p>&copy; {{ currentYear }} LuixDev. Todos los derechos reservados.</p>
      <div class="footer-links">
        <a href="/privacidad">Política de Privacidad</a>
        <a href="/terminos">Términos de Servicio</a>
        <a href="/contacto">Contacto</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentYear = ref(new Date().getFullYear());

// Opcional: si quieres asegurarte de que se actualice en caso de cambio de año durante la sesión
onMounted(() => {
  // En la mayoría de los casos no es necesario, pero lo dejo como ejemplo
});
</script>

<style scoped>
.app-footer {
  
  color: #bdc3c7;
  padding: 20px 0;
  text-align: center;
  margin-top: auto;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.footer-links a {
  color: #bdc3c7;
  text-decoration: none;
  margin: 0 10px;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #bdc3c7;
}
</style>