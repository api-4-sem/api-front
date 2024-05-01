import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import HomeView from "../views/HomeView.vue";
import RastreioView from "../views/rastreio/RastreioView.vue";
import LacunaView from "@/views/lacuna/LacunaView.vue";
import AcompanhamentoView from "@/views/acompanhamento/AcompanhamentoView.vue";
import NotificacaoView from "@/views/notificacao/NotificacaoView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path:"/trilha/:id",
    name: "trilha",
    component: LacunaView
  },
  {
    path: "/acompanhamento",
    name: "acompanhamento",
    component: AcompanhamentoView,
  },
  {
    path: "/rastreio",
    name: "rastreio",
    component: RastreioView,
  },
  {
    path: "/notificacoes",
    name: "notificacoes",
    component: NotificacaoView,
  },
  {
    path: "/visualizacao",
    name: "visualizacao",
    component: () =>
      import(
        /* webpackChunkName: "visualizacao" */ "../views/visualizacao/VisualizacaoView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
