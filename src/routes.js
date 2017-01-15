import VueRouter from 'vue-router';
import Main from './components/main';
// import ToolBar from './components/toolbar';

// import Home from './components/home';
import Signin from './components/signin';
// import Signup from './components/signup';
// import Shop from './components/shop';
// import Cart from './components/cart';
// import Admin from './components/admin/admin';

const routes = [{
  path     : '/',
  name     : 'main',
  component: Main
},
 {
  path     : '/signin',
  name     : 'signin',
  component: Signin
},
  { path: '*', redirect: { name: 'main' } }];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router