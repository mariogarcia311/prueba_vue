import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import PrimeVue from "primevue/config";

import "/node_modules/primeflex/primeflex.css";
import "./styles/styles.css"; //theme

import "/node_modules/primevue/resources/themes/md-light-indigo/theme.css"; //theme
import "/node_modules/primevue/resources/primevue.min.css"; //core css
import "/node_modules/primeicons/primeicons.css"; //icons

import ToastService from "primevue/toastservice";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Card from "primevue/card";
import Button from "primevue/button";
import Toast from "primevue/toast";
import Dialog from "primevue/dialog";
import ProgressSpinner from "primevue/progressspinner";
import Menu from "primevue/menu";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Menubar from "primevue/menubar";

const app = createApp(App);
app.use(ToastService);
app.use(router);
app.use(store);
app.use(PrimeVue);

app.component("InputText", InputText);
app.component("Password", Password);
app.component("Card", Card);
app.component("Button", Button);
app.component("Toast", Toast);
app.component("Dialog", Dialog);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Menu", Menu);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Menubar", Menubar);
app.mount("#app");
