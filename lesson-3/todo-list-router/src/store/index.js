import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutation";
import actions from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
  },
  actions,
  mutations,
});

export default store;
