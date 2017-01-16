export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user'))
};

const mutations = {
  [SIGN_IN]( state, user ) {
    console.log('Oh here is the user: ', state.user);
    debugger;
    state.user = user;    
    state.isLoggedIn = true;
  },
  [SIGN_OUT]( state ) {
    state.isLoggedIn = false;
  }
}

const actions = {
  singnIn({commit}, user) {
    commit(SIGN_IN, {
      user
    });
  }
};

const getters = {
  isLoggedIn: state => state.user.isLoggedIn,
  currUser: state => state.user
};

export default {
  state,
  getters,
  actions,
  mutations
}