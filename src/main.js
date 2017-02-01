import './style.scss';
import './utils.js';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store/store';
import router from './routes';


const app = new Vue({
  router,
  store,
  components: {

  }
}).$mount('#app');
