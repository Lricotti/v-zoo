import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Game from '../views/Game.vue'
import Registro from "@/components/Registro";
import Desierto from "@/components/Desierto";
import InformacionCuenta from "@/components/InformacionCuenta";
import tundra from "@/components/Tundra";
import selva from "@/components/Selva";
import Oceano from "@/components/Oceano";

const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/registro', name: "registro", component: Registro},
  {path: '/game', name: 'game', component: Game},
  {path: '/desierto', name:'desierto', component: Desierto},
  {path: '/informacioncuenta', name:'informacioncuenta', component: InformacionCuenta},
  {path: '/tundra', name:'tundra', component: tundra},
  {path: '/selva', name:'selva', component: selva},
  {path: '/oceano', name:'oceano', component: Oceano}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
