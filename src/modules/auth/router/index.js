export default {
  name: "auth",
  component: () =>
    import(
      /* webpackChunkName: "Auth Layout" */ "@/modules/auth/layouts/AuthLayout.vue"
    ),
  children: [
    {
      path: "login",
      name: "login",
      component: () =>
        import(
          /* webpackChunkName: "Login" */ "@/modules/auth/views/Login.vue"
        ),
    },

    {
      path: "",
      redirect: { name: "login" },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "login" },
    },
  ],
};
