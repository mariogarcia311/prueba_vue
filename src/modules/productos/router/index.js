export default {
  name: "productos",
  component: () =>
    import(
      /* webpackChunkName: "Auth Layout" */ "@/modules/productos/layouts/ProductosLayout.vue"
    ),
  children: [
    {
      path: ":id",
      name: "inicio",
      component: () =>
        import(
          /* webpackChunkName: "Inicio" */ "@/modules/productos/views/Inicio.vue"
        ),
    },

    {
      path: "",
      redirect: { name: "inicio" },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "inicio" },
    },
  ],
};
