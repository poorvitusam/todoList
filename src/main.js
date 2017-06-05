// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueMaterial from 'vue-material';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import Store from './store/index';


Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(Vuex);

const store = new Vuex.Store(Store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
