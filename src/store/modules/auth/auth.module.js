import authService from '../../../services/auth.service';

export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';
export const CHECK_USER_LOGGED = 'auth/CHECK_USER_LOGGED';
export const ADD_USER_SITE = 'auth/ADD_USER_SITE';
export const DELETE_USER_SITE = 'auth/DELETE_USER_SITE';


const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')),
};

const mutations = {
  [SIGN_IN](state, user) {
    state.user = user;
    state.isLoggedIn = true;
  },
  [SIGN_OUT](state) {
    state.isLoggedIn = false;
    state.user = {};
  },
  [CHECK_USER_LOGGED](state) {
    state.isLoggedIn = !!localStorage.getItem('token');
    state.user = JSON.parse(localStorage.getItem('user'));
    if (state.user == null) {
      state.user = { sites: [] };
    } else {
    }
  },
  [ADD_USER_SITE](state, newSiteId) {
    state.user.sites.push(newSiteId);
    localStorage.setItem('user', JSON.stringify(state.user));
  },
  [DELETE_USER_SITE](state, siteId) {
    let siteIdx = state.user.sites.indexOf(siteId);
    state.user.sites.splice(siteIdx, 1);
  },

}

const actions = {
  singnIn({commit}, user) {
    commit(SIGN_IN, { user });
  },
  signOut({commit}) {
    authService.signout()
    commit(SIGN_OUT);
  },
  checkUserLogged({commit}) {
    commit(CHECK_USER_LOGGED);
  },

};

const getters = {
  isLoggedIn: state => state.isLoggedIn,
  currUser: state => state.user
};

export default {
  state,
  getters,
  actions,
  mutations
}