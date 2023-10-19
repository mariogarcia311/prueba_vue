import authApi from "@/api/refacilApi";
import { createStore } from "vuex";
import { useToast } from "primevue/usetoast";
import { encodeJSON } from "@/helpers/encodeJSON";
import { decodeJSON } from "@/helpers/decodeJSON";

export default createStore({
  state: {
    user: null,
    isLoading: false,
    errorMessage: {
      summary: "",
      detail: "",
    },
    modules: null,
  },
  getters: {
    getErrorMessage(state) {
      return state.errorMessage;
    },
  },
  mutations: {
    saveToken(state, data) {},
    setLoading(state, val) {
      state.isLoading = val;
    },
    setUser(state, val) {
      state.user = val;
    },
    setModules(state, val) {
      state.modules = val;
    },
    handleErrorMessage(state, val) {
      state.errorMessage = val;
    },
  },
  actions: {
    async login({ commit }, data) {
      try {
        const { user, password } = data;
        commit("setLoading", true);
        const resp = await authApi.post(`/auth/login`, data);
        if (resp.status === 200) {
          localStorage.clear();
          commit("setModules", resp.data.modules);
          commit("setUser", resp.data.user);
          const modulesEncode = encodeJSON(resp.data.modules);
          const userEncode = encodeJSON(resp.data.user);
          localStorage.setItem("modules", modulesEncode);
          localStorage.setItem("user", userEncode);
          localStorage.setItem("token", resp.data.user.token);
          commit("setLoading", false);
          return "ok";
        }
      } catch (error) {
        this.commit("handleErrorMessage", {
          summary: "Usuario/Contraseña Inválido",
          detail: "Ingrese un Usuario/Contraseña correcto",
        });

        commit("setLoading", false);
      }
      commit("setLoading", false);
    },
    loadStorage({ commit }) {
      const modules = decodeJSON(localStorage.getItem("modules"));
      const user = decodeJSON(localStorage.getItem("user"));
      if (modules === "error" || user === "error") {
        localStorage.clear();
      } else {
        commit("setModules", modules);
        commit("setUser", user);
      }
      console.log(modules, modules);
    },
  },
  modules: {},
});
