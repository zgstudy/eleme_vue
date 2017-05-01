<template>
  <div class="star"  :class="starType">
    <span v-for="classItem in classItems" class="star-item" :class="classItem"></span>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';
export default {
  name: 'star',
  props: {
    size: {
      type: Number,
      default: 24
    },
    score: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      
    }
  },
  computed: {
    starType () {
      return 'star-' + this.size;
    },
    classItems () {
      let result = [];
      let scoreTemp = Math.floor(this.score * 2) / 2;
      console.log('scoreTemp::', scoreTemp);
      let hasDecimals = scoreTemp % 1;
      for (let i = 1; i < scoreTemp; i++) {
        result.push(CLS_ON);
      }
      if(hasDecimals){
        result.push(CLS_HALF);
      }
      while(result.length < LENGTH){
        result.push(CLS_OFF);
      }
      console.log('result::', result);
      return result;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';
star($size, $type)
  u = unit($size, px)
  width: u
  height: u
  background-size: u u
  &.on
    bg-img('./img/star' + $type + '_on')
  &.half
    bg-img('./img/star' + $type + '_half')
  &.off
    bg-img('./img/star' + $type + '_off')
  &:last-child
    margin-right: 0
.star
  font-size: 0
  .star-item
    display: inline-block
    background-repeat: no-repeat
  &.star-24
    .star-item
      star(10, 24)
      margin-right: 3px
  &.star-36
    .star-item
      star(15, 36)
      margin-right: 6px
  &.star-48
    .star-item
      star(20, 48)
      margin-right: 22px
</style>
