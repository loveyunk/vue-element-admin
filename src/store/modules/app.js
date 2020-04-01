const state = {
  sidebar: {
    isCollapse: false
  }
};

const getters = {};

const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.sidebar.isCollapse = !state.sidebar.isCollapse;
  }
};

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
