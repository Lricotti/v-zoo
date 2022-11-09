import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Game from '../views/Game2.vue'
import Registro from "@/components/Registro";
import Desierto from "@/components/Desierto";
import InformacionCuenta from "@/components/InformacionCuenta";
import tundra from "@/components/Tundra";
import selva from "@/components/Selva";
import Oceano from "@/components/Oceano";
import RegistoExitoso from "@/components/RegistoExitoso";
import paginaNoEncontrada from "@/components/PaginaNoEncontrada";
import Algosaliomal from "@/components/Algosaliomal";


const routes = [
  {path: '/', name: 'home', component: HomeView},
  {path: '/registro', name: "registro", component: Registro},
  {path: '/registo/exitoso', name: "registroexito", component: RegistoExitoso},
  {path: '/game', name: 'game', component: Game},
  {path: '/desierto', name:'desierto', component: Desierto},
  {path: '/informacioncuenta', name:'informacioncuenta', component: InformacionCuenta},
  {path: '/tundra', name:'tundra', component: tundra},
  {path: '/selva', name:'selva', component: selva},
  {path: '/oceano', name:'oceano', component: Oceano},
  {path: '/registro/error', name: "AlgoSalioMal", component: Algosaliomal},

  {path: '/:pathMatch(.*)*', component: paginaNoEncontrada}

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
