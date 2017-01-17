import VueRouter from 'vue-router';


import Main from './components/main';
import PublishPage from './components/publish-page';
import Home from './components/home';
import Signin from './components/signin';


const routes = [{
  path     : '/main',
  name     : 'main',
  component: Main

  },
  {
    path     : '/',
    name     : 'home',
    component: Home
  },
  {
    path     : '/signin',
    name     : 'signin',
    component: Signin
  },
  {
    path     : '/published',
    name     : 'published',
    component: PublishPage
  },
  { path: '*', redirect: { name: 'main' } }];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router