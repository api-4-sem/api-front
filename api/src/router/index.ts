import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RastreioView from "../views/rastreio/RastreioView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/acompanhamento",
    name: "acompanhamento",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RastreioView
  },
  {
    path: "/visualizacao",
    name: "visualizacao",
    component: () =>
      import(/* webpackChunkName: "visualizacao" */ "../views/visualizacao/VisualizacaoView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
