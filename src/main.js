import './style.scss';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store/store';
import router from './routes';
import MainNav from './components/main-nav';
// import ToolBar from './components/toolbar';

const app = new Vue({
  router,
  store,
  components: {
    MainNav,
    // ToolBar
  }
}).$mount('#app');

