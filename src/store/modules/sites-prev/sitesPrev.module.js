
// const state = {
//   isLoggedIn: !!localStorage.getItem('token'),
//   sitesPrev: JSON.parse(localStorage.getItem('user'))
// };

// const mutations = {
//   [SIGN_IN]( state, user ) {
//     console.log('Oh here is the user: ', state);
//     state.user = user;    
//     state.isLoggedIn = true;
//   },
//   [SIGN_OUT]( state ) {
//     state.isLoggedIn = false;
//   }
// }

// const actions = {
//   singnIn({commit}, user) {
//     console.log('user in signIn function',user)
//     commit(SIGN_IN, {
//       user
//     });
//   }
// };

const getters = {
  sitesToPrev: state => state.site.sitesPrev
};

export default {
  getters,
}