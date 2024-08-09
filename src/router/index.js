

import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import IbgeView from '../pages/IbgeView'  

const routes = [
  { path: '/', component: HomeView },
  { path: '/ibge', component: IbgeView },  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
