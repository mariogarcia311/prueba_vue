import { createRouter, createWebHashHistory } from "vue-router";
import authRouter from "../modules/auth/router";
import productosRouter from "../modules/productos/router";
import HomeView from "../views/HomeView.vue";
import isAuthenticatedGuard from "./auth-guard";
import isNotAuthenticatedGuard from "./public-guard";

const routes = [
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/auth",
    beforeEnter: [isNotAuthenticatedGuard],
    ...authRouter,
  },
  {
    path: "/productos",
    beforeEnter: [isAuthenticatedGuard],
    ...productosRouter,
  },
  {
    path: "/",
    redirect: { name: "login" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
