import { createRouter, createWebHistory } from 'vue-router';
import Inicio from '../views/Inicio.vue';
import Login from '../views/Login.vue';
import Productos from '../views/Productos.vue';
import FormularioProducto from '../views/FormularioProducto.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Inicio,
      meta: { requiresAuth: true }
    },
    {
      path: '/productos',
      component: Productos,
      meta: { requiresAuth: true}
    },
    {
      path: '/productos/nuevo',
      component: FormularioProducto
    },
    {
      path: '/productos/editar/:id',
      component: FormularioProducto
    },
    {
      path: '/login',
      component: Login
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.path !== '/login' && !isAuthenticated) {
    next('/login');
  } else if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    // Only reload on navigating to the login page
    if (to.path === '/login' && isAuthenticated) {
      window.location.reload();
    } else {
      next();
    }
  }
});

export default router;