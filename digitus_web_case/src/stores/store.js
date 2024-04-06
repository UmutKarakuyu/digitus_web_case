import { createStore } from 'vuex';

const store = createStore({
  state: {
    alertObject: {
      message: '',
    },
  },
  mutations: {
    showAlert(state, { message }) {
      console.log("mutation")
      state.alertObject.message = message;
    },
    hideAlert(state) {
      state.alertObject.message = '';
    },
  },
  actions: {
    showAlert({ commit }, { message }) {
      console.log("action")
      commit('showAlert', { message });
    },
    hideAlert({ commit }) {
      commit('hideAlert');
    },
  },
  plugins: [],
});

export default store;