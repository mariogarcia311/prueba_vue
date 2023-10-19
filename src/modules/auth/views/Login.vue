<template>
  <div class="col-12 flex justify-content-center vh100 align-items-center">
    <Card style="width: 36em; height: 350px">
      <template #title> Login </template>
      <template #content>
        <div class="field col-12 flex justify-content-center">
          <span class="p-float-label p-input-icon-right">
            <i class="pi pi-user" />
            <InputText id="inputtext-right" type="text" v-model="user" />
            <label for="inputtext-right">Usuario</label>
          </span>
        </div>
        <div class="field col-12 flex justify-content-center">
          <span class="p-float-label">
            <Password
              id="password"
              toggleMask
              v-model="password"
              :feedback="false"
              inputClass="p-password-class"
              panelClass="p-password-class"
            />
            <label for="password">Contraseña</label>
          </span>
        </div>
      </template>
      <template #footer>
        <div class="col-12 flex justify-content-end">
          <Button
            icon="pi "
            label="Login"
            class="p-button-raised"
            @click="handleLogin()"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  data() {
    return {
      user: "",
      password: "",
    };
  },

  computed: {
    ...mapState(["isLoading", "errorMessage"]),
  },

  methods: {
    async handleLogin() {
      const resp = await this.login({
        username: this.user,
        password: this.password,
      });
      if (resp === "ok") {
        this.$router.push({ name: "inicio", params: { id: "sells" } });
      }
    },
    ...mapActions(["login"]),
    ...mapMutations(["setUserName", "setModules"]),
  },
  watch: {},
  created() {},
};
</script>

<style scoped>
.p-float-label {
  display: inline-block;
}
::v-deep .p-inputtext {
  padding-right: 3rem;
  width: 370px !important;
}
.vh100 {
  min-height: 100vh;
}
</style>
