<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view></router-view> <!-- Aquí se renderiza el login -->
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'; // 👈 Importa el footer

export default {
  name: "App",
  components: {
    Footer // 👈 Registra el componente
  },
  mounted() {
 
    
  },
};
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>