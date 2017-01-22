import VueRouter from 'vue-router';


import Main from './components/main';
import PublishPage from './components/publish-page';
import Home from './components/home';
import Signin from './components/signin';
import Signup from './components/signup';


const routes = [
  {
    path     : '/home',
    name     : 'home',
    component: Home
  },
  {
  path     : '/main/:id',
  name     : 'main',
  component: Main
  },

  {
    path     : '/',
    name     : 'signin',
    component: Signin
  },
  {
    path     :'/signup',
    name     :'signup',
    component:Signup
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