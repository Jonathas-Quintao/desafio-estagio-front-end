// router.js ou main.js

import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import IbgeView from '../pages/IbgeView'  // Corrigir o nome aqui

const routes = [
  { path: '/', component: HomeView },
  { path: '/ibge', component: IbgeView },  // Corrigir o nome aqui
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;
