import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import "./assets/data/mockdata.js";
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import Base64 from "js-base64";

// base64 加密
// let Base64 = require("js-base64").Base64;

Vue.use(VueQuillEditor);
Vue.use(Vuex);
Vue.use(Base64);

// import VueAxios from "vue-axios";
Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
