<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img
          alt="logo"
          src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"
          height="40"
          class="mr-2"
        />
      </template>
      <template #end>
        <Button
          icon="pi "
          label="Log out"
          class="p-button-raised"
          @click="logOut()"
        />
      </template>
    </Menubar>
  </div>
  <div class="grid col-12">
    <div class="col-3 p-0 hidden md:block">
      <Menu :model="items" />
    </div>
    <div class="col-12 md:col-9">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Inicio", icon: "pi pi-fw pi-home", to: "/productos/inicio" },
        {
          label: "Vender",
          icon: "pi pi-fw pi-bookmark",
          to: "/productos/sells",
        },
        {
          label: "Cobrar y cargar",
          icon: "pi pi-fw pi-money-bill",
          to: "/productos/charge",
        },
        {
          label: "Créditos",
          icon: "pi pi-fw  pi-euro",
          to: "/productos/credits",
        },
        {
          label: "Mi negocio",
          icon: "pi pi-fw pi-amazon",
          to: "/productos/marketplace",
        },
        {
          label: "Reportes",
          icon: "pi pi-fw pi-file-edit",
          to: "/productos/payments",
        },
        { label: "Mi cuenta", icon: "pi pi-fw pi-cog", to: "/productos" },
      ],
    };
  },
  methods: {
    logOut() {
      localStorage.clear();
      location.reload();
    },
  },
};
</script>

<style scoped></style>
