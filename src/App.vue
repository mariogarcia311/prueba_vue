<template>
  <router-view />
  <Toast />
  <Loading v-if="isLoading" />
</template>
<script>
import { defineAsyncComponent } from "vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Loading: defineAsyncComponent(() =>
      import("./modules/shared/views/Loading.vue")
    ),
  },
  computed: {
    ...mapState(["isLoading", "errorMessage"]),
  },
  mounted() {
    this.$store.dispatch("loadStorage");
  },

  watch: {
    errorMessage() {
      this.$toast.add({
        severity: "error",
        summary: "Usuario/Contraseña Inválido",
        detail: "Ingrese un Usuario/Contraseña correcto",
        life: 3000,
      });
    },
  },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
