/* use 'esversion:6' */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Router from './router';
import Axios from 'axios';
import VueAxios from 'vue-axios';

import '@/common/stylus/index.styl';

Vue.config.productionTip = false;

Vue.use(VueAxios, Axios);

// console.log('router:\n', router);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  template: '<App/>',
  components: { App }
});
// 初始化路由到商品页面
Router.push('goods');

