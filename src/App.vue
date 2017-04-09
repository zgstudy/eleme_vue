<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评价</div>
      <div class="tab-item">商家</div>
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

</style>
