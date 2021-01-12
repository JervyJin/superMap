import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /* 默认的主题颜色 */
    themeColor: "#409EFF"
  },
  getters: {},
  mutations: {
    getThemeColor(state, payload) {
      state.themeColor = payload.color;
    }
  },
  actions: {}
});

