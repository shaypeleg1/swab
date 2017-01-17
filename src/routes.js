import VueRouter from 'vue-router';
import Main from './components/main';

import Home from './components/home';
import Signin from './components/signin';

const routes = [{
  path     : '/main',
  name     : 'main',
  component: Main
},
{
  path     : '/home',
  name     : 'home',
  component: Home
},
 {
  path     : '/',
  name     : 'signin',
  component: Signin
},
  { path: '*', redirect: { name: 'main' } }];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router