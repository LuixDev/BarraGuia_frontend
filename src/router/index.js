import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores/auth'
import Login from "../views/Login.vue";
import Inicio from "../views/Inicio.vue";
import Datos from "../views/Datos.vue";
import Evento from "../views/Evento.vue";
import Mapas from "../views/Mapas.vue";
import Noticia from "../views/Noticia.vue";
import Registro from "../views/Registro.vue";
import Recover from "../views/Recover.vue";

const routes = [
  { path: "/", redirect: "/login" },  // Redirige automáticamente
  { path: "/login", component: Login },
  { path: "/inicio", component: Inicio,
     meta: { requiresAuth: true }    
   },
  { path: "/datos", component: Datos,
     meta: { requiresAuth: true }
   },
  { path: "/evento", component: Evento,
     meta: { requiresAuth: true }
   },
  { path: "/mapas", component: Mapas,
     meta: { requiresAuth: true }
   },
  { path: "/noticia", component: Noticia,
     meta: { requiresAuth: true }
   },
  { path: "/registro", component: Registro },
  { path: "/recover", component: Recover },
  // otras rutas...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 👇 Guardia global
router.beforeEach(async (to) => {
  const auth = useAuthStore()
  /*
  // Si la ruta requiere autenticación
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return '/login'
  }

  // Si ya está autenticado y va a login
  if (to.path === '/login' && auth.isAuthenticated) {
    return '/inicio'
  }
*/
})

export default router;
