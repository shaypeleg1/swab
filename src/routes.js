import VueRouter from 'vue-router';


import Main from './components/main';
import PublishPage from './components/publish-page';
import Home from './components/home';
import Signin from './components/signin';


const routes = [
  {
    path     : '/home',
    name     : 'home',
    component: Home
  },
  {
  path     : '/main',
  name     : 'main',
  component: Main
  },

  {
    path     : '/',
    name     : 'signin',
    component: Signin
  },
  {
    path     : '/published/:id',
    name     : 'published',
    component: PublishPage
  },
  { path: '*', redirect: { name: 'main' } }];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router