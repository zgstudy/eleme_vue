<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item"><router-link to="/goods">商品</router-link></div>
      <div class="tab-item"><router-link to="/star">评价</router-link></div>
      <div class="tab-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <div class="content">
      I am content.
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header/header'
export default {
  name: 'app',
  components: {
    'v-header': Header
  }
};
</script>

<style lang="stylus" scoped>
.tab
  display: flex
  justify-content: space-between
  .tab-item
    height: 40px
    font-size: 14px
    line-height: 14px
    color: rgb(77,85,93)
    &.active
      color: rgb(240,20,20)
</style>
