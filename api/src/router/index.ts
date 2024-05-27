import AcompanhamentoView from "@/views/acompanhamento/AcompanhamentoView.vue";
import AvaliacaoView from "@/views/avaliacao/AvaliacaoView.vue";
import LacunaView from "@/views/lacuna/LacunaView.vue";
import cadastroP from "@/views/parceiro/CadastroParceiros.vue";
import visu from "@/views/parceiro/VisualizacaoParceiros.vue"
import NotificacaoView from "@/views/notificacao/NotificacaoView.vue";
<<<<<<< HEAD
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
=======
import PorEstadoMapa from "@/views/parceiros/PorEstadoMapa.vue";
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
>>>>>>> develop

import HomeView from "../views/HomeView.vue";
import RastreioView from "../views/rastreio/RastreioView.vue";
import Dashboard from "../views/dashboard/DashboadView.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/trilha/:id",
    name: "trilha",
    component: LacunaView,
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
    path: "/avaliacao",
    name: "avalicao",
    component: AvaliacaoView,
  },
  {
    path: "/cadastroparceiros",
    name: "cadastro",
    component: cadastroP,
  },
  {
    path: "/visualizacaoparceiro",
    name: "visualizacaop",
    component: visu,
  },
  {

    path: "/notificacoes",
    name: "notificacoes",
    component: NotificacaoView,

  },
  {

    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,

  },
  {
    path: "/visualizacao",
    name: "visualizacao",
    component: () =>
      import(
        /* webpackChunkName: "visualizacao" */ "../views/visualizacao/VisualizacaoView.vue"
      ),
  },
  {

    path: "/por-estado-mapa",
    name: "porestadomapa",
    component: PorEstadoMapa,

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
