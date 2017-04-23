import Vue from 'vue';
import Router from 'vue-router';
import Goods from '@/components/goods/goods';
import Seller from '@/components/seller/seller';
import Star from '@/components/star/star';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [{
    path: '/goods',
    name: 'Goods',
    component: Goods
  }, {
    path: '/seller',
    name: 'Seller',
    component: Seller
  }, {
    path: '/star',
    name: 'Star',
    component: Star
  }]
});
