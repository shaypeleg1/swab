import Vue from 'vue';
import SiteService from './site.service.js';

/**
 *
 * @param email
 * @param password
 * @returns {Promise}
 */

function signin({email, password}) {
  return Vue.http.post('login', {
    email: email,
    pass: password
  })
    .then(res => res.json())
    .then(({
      token,
      user
    }) => {
      setSession(token, user);
      return user;
    })
}

/**
 *
 * @param email
 * @param password
 */
function signup({
  email,
  password,
  firstName,
  lastName,
  sites
}) {
  const token = 'JWT';

  // for coding-academy server
  // serverConfig.serverUrl + 
  return Vue.http.post('signup', {
    email: email,
    pass: password,
    firstName: firstName,
    lastName: lastName,
    sites: sites
  })
    .then(res => res.json())
    .then(({
      token,
      user
    }) => {
      console.log('this  user that is returned from server', user)
      setSession(token, user);
      return user;
    });
  // );
}

/**
 *
 * @param token
 */
function setSession(token, user) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

/**
 * Remove session
 */
function signout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  Vue.http.get('logout')
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
function protectRoute(next) {
  if (isLoggedIn()) {
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
