<template>
  <div class="header">
    <div class="content-wrap">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
    </div>
    <div class="note">

    </div>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {

    }
  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="stylus" scoped>

</style>
