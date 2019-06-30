import ApiService from "@/service/api.service";
import JwtService from "@/service/jwt.service";


const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  login(context, credentials) {
    return new Promise(resolve => {
      ApiService.post("users/login", { user: credentials })
        .then(({ data }) => {
          context.commit('ser_auth', data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit('set_error', response.data.errors);
        });
    });
  },
  logout(context) {
    context.commit('purge_auth');
  },

  check_auth(context) {
    return new Promise((resolve, reject) => {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.get("user")
          .then(({ data }) => {
            context.commit(set_auth, data.user);
            resolve()
          })
          .catch(({ response }) => {
            context.commit('set_error', response.data.errors);
            // reject()
          });
      } else {
        context.commit('purge_auth');
        resolve()
        // reject()
      }
    })
  },
  update_user(context, payload) {
    const { email, username, password, image, bio } = payload;
    const user = {
      email,
      username,
      bio,
      image
    };
    if (password) {
      user.password = password;
    }

    return ApiService.put("user", user).then(({ data }) => {
      context.commit('set_auth', data.user);
      return data;
    });
  }
};

const mutations = {
  set_error(state, error) {
    state.errors = error;
  },
  set_auth(state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },
  purge_auth(state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters,
};
