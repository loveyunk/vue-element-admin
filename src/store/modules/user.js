import { Message } from 'element-ui';
import services from '../../utils/request';
import { login } from '../../services/authentication';

const state = {
  user: null
};

const getters = {};

const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData;
    localStorage.setItem('user', JSON.stringify(userData));
    services.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
  },
  LOGOUT() {
    localStorage.removeItem('user');
    window.location.reload();
  }
};

const actions = {
  login({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      login(credentials)
        .then(res => {
          if (res.error_code === 0) {
            commit('SET_USER_DATA', res.data);
            resolve();
          } else {
            Message({
              message: res.error_msg,
              type: 'error',
              duration: '2000'
            });
            reject();
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  logout({ commit }) {
    commit('LOGOUT');
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
