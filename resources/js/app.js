require("./bootstrap");

window.Vue = require("vue");

import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import { routes } from "./routes";
import swal from "sweetalert";
import Vuetify from "../plugins/vuetify";

const router = new VueRouter({
    mode: "history",
    routes: routes
});

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component("app-component", require("./components/App.vue").default);
Vue.component("login-component", require("./components/Login.vue").default);

const app = new Vue({
    el: "#app",
    vuetify: Vuetify,
    router: router
});
