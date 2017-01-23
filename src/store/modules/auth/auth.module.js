import authService from '../../../services/auth.service';

export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';
export const CHECK_USER_LOGGED = 'auth/CHECK_USER_LOGGED';

const state = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user'))
};

const mutations = {
  [SIGN_IN]( state, user ) {
    console.log('sinin.components:signin -> auth.modue:SIGN_IN this is user: ', user)
    console.log('this is the state',state);
    state.user = user;    
    state.isLoggedIn = true;
  },
  [SIGN_OUT]( state ) {
    state.isLoggedIn = false;
    state.user = {};
  },
  [CHECK_USER_LOGGED](state) {
    state.isLoggedIn = !!localStorage.getItem('token');
    state.user = JSON.parse(localStorage.getItem('user'));
  },
}

const actions = {
  singnIn({commit}, user) {
    console.log('user in signIn function',user)
    commit(SIGN_IN, {user});
  },
  signOut({commit}){
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