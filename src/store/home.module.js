import Cookies from 'js-cookie'

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  }
};

const getters = {

};

const actions = {
  sidebar_toggle(context, credentials) {
    this.commit('toggle_sidebar')
  },
  sidebar_close(context, credentials) {
    this.commit('close_sidebar')
  }
};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {

  toggle_sidebar: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  close_sidebar: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
  // namespaced: true,
};
