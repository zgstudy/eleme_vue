import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@/components/goods/goods';
import Header from '@/components/header/header';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/header',
    name: 'Header',
    component: Header
  }, {
    path: '/goods',
    name: 'Goods',
    component: Goods
  }]
});
