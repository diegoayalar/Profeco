import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Productos from '../views/Productos.vue'
import FormularioProducto from '../views/FormularioProducto.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Inicio
    },
    {
      path: '/productos',
      component: Productos
    },
    {
      path: '/productos/nuevo',
      component: FormularioProducto
    },
    {
      path: '/productos/editar/:id',
      component: FormularioProducto
    },
  ],
})

export default router