<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-tb">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/star">评价</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/header';
const ERR_OK = 0;
export default {
  name: 'app',
  data () {
    return {
      goods: {},
      seller: {},
      ratings: {}
    };
  },
  created () {
    this.$http.get('/api/goods').then((res) => {
      let d = res.data;
      if(d.errno === ERR_OK){
        this.goods = d.data;
      } else {
        console.error('get "/api/goods" has error!');
      }
    });
    this.$http.get('/api/seller').then((res) => {
      let d = res.data;
      if(d.errno === ERR_OK){
        this.seller = d.data;
      } else {
        console.error('get "/api/seller" has error!');
      }
    });
    this.$http.get('/api/ratings').then((res) => {
      let d = res.data;
      if(d.errno === ERR_OK){
        this.ratings = d.data;
      } else {
        console.error('get "/api/ratings" has error!');
      }
    });
  },
  components: {
    'v-header': Header
  }
};
</script>

<style lang="stylus" scoped>
@import './common/stylus/mixin.styl';
.tab
  display: flex
  border-tb-onepx(rgba(1,17,27,0.1), 'bottom')
  .tab-item
    flex: 1
    text-align: center
    line-height: 40px
    height: 40px
    color: rgb(77,85,93)
    > a
      font-size: 14px
      &.active
        color: rgb(240,20,20)
</style>
