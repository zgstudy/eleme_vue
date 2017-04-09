<template>
  <div class="header">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      msg: 'Header'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="stylus" scoped>

</style>
