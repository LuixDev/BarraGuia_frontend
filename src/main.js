

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"; // Importa tu router
import { createPinia } from 'pinia' // 👈 ESTA LÍNEA ES CLAVE

const app = createApp(App);
app.use(createPinia()) // 👈 necesario

app.use(router); // Muy importante
app.mount("#app");