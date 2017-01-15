export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user'))
};

const mutations = {
  [SIGN_IN]( state, user ) {
    
    state.user = user;
    state.isLoggedIn = true;
  },
  [SIGN_OUT]( state ) {
    state.isLoggedIn = false;
  }
}

const actions = {
  singnIn({commit}, type) {
    commit(SIGN_IN, {
      type
    });
  }
};

const getters = {
  isLoggedIn: state => state.user.isLoggedIn,
  currUser: state => state.currUser
};

export default {
  state,
  getters,
  actions,
  mutations
}