import authService from '../../../services/auth.service';

export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_OUT = 'auth/SIGN_OUT';

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
    // console.log('auth.module:signOut -> auth.module:SIGN_OUT, about to change state.isLoggedin to false')
    state.isLoggedIn = false;
  }
}

const actions = {
  singnIn({commit}, user) {
    console.log('user in signIn function',user)
    commit(SIGN_IN, {
      user
    });
  },
  signOut({commit}){
    // console.log('home.component:signOut -> auth.module:signOut =>> auth.service:signout no data to send');
    let testRes = authService.signout()
    // console.log('authService -> auth.module:signOut => auth.module:SIGN_OUT',);
    commit(SIGN_OUT);
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