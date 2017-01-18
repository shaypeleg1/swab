import Vue from 'vue';
import SiteService from './site.service.js';
import serverConfig from './services-config.js';


/**
 *
 * @param email
 * @param password
 * @returns {Promise}
 */

// let userAndSites = [];
function signin( {email,password} ) { 
  console.log(serverConfig.serverUrl);
   
  return Vue.http.post(serverConfig.serverUrl+'login', {email: email, pass: password} )
    .then(res => res.json())
    .then(({token, user}) => {
      setSession(token, user);
      // userAndSites.push(user);
      return user;
    })
}




/**
 *
 * @param email
 * @param password
 */
function signup( { email, password } ) {
  const token = 'JWT';
  return new Promise(resolve => {
    resolve({
      token
    });
    setSession(token);
  });
}

/**
 *
 * @param token
 */
function setSession( token, user ) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

/**
 * Remove session
 */
function signout() {
  console.log('auth.module:signOut -> auth.service:signout => server-full:get.logout')
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  Vue.http.get(serverConfig.serverUrl+'logout')
}

/**
 *
 * @returns {boolean}
 */
function isLoggedIn() {
  return !!localStorage.getItem('token');
}

/**
 *
 * @param next
 */
function protectRoute( next ) {
  if( isLoggedIn() ) {
    next();
  } else {
    next(false);
  }
}

export default {
  signin,
  signup,
  signout,
  setSession,
  isLoggedIn,
  protectRoute,
}
