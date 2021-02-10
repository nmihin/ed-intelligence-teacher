import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
//import VueRouter from "vue-router";
import router from './router';
import $ from 'jquery';
import Notifications from 'vue-notification';
import VueLazyload from 'vue-lazyload';

import './assets/css/styles.css';

Vue.use(Vuex);
Vue.use(Notifications);
Vue.use(VueLazyload);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  $
}).$mount("#app");
