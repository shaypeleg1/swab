import './style.scss';
import './utils.js';
import './vendor';
import './vue-plugins';

import Vue from 'vue';
import store from './store/store';
import router from './routes';

// for coding-academy server
Vue.http.options.root="https://coding-academy.net/swab/data";

// Vue.http.options.root="http://localhost:3003"
// Vue.http.options.root= "192.168.1.18:3003"

const app = new Vue({
  router,
  store,
  components: {

  }
}).$mount('#app');

