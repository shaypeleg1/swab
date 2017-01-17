import Vue from 'vue';
import SiteService from './site.service.js';

/**
 *
 * @param email
 * @param password
 * @returns {Promise}
 */

let userAndSites = [];
function signin( {email,password} ) {
  return Vue.http.post('http://localhost:3003/login', {email: email, pass: password} )
    .then(res => res.json())
    .then(({token, user}) => {
      setSession(token, user);
      userAndSites.push(user);
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
  localStorage.removeItem('token');
  localStorage.removeItem('user');
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
