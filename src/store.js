import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "", // 用户token
    username: "" // 用户名
  },
  mutations: {},
  actions: {}
});
