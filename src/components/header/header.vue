<template>
  <div class="header">
    <div class="content-wrap">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="supports-count">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrap">
      <span class="icon"></span><span class="text">{{seller.bulletin}}</span><i class="icon-keyboard_arrow_right"></i>
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
    // 支持相关信息根据type编写成数组，方便读取对应的标识icon图片
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';
.header
  /*height: 80px*/
  color: #fff
  background-color: rgba(7, 17, 127, 0.5)
  .content-wrap
    position: relative
    height: 64px
    padding: 24px 12px 18px 24px
    font-size: 0
    .avatar
      display: inline-block
      border-radius: 2px
      width: 64px
      height: 64px
      overflow: hidden
      vertical-align: top
    .content
      display: inline-block
      margin-left: 16px
      .title
        font-size: 0
        margin: 2px 0 8px
        .brand
          display: inline-block
          vertical-align: top
          width: 30px
          height: 18px
          bg-img('./img/brand')
          background-size: 30px 18px
          background-repeat: no-repeat
        .name
          margin-left: 6px
          font-size: 16px
          font-weight: bold
          line-height: 18px
      .description
        font-size: 12px
        line-height: 12px
        margin: 8px 0 10px
      .supports
        margin: 10px 0 2px
        font-size: 0
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-img('./img/decrease_1')
          &.discount
            bg-img('./img/discount_1')
          &.guarantee
            bg-img('./img/guarantee_1')
          &.invoice
            bg-img('./img/invoice_1')
          &.special
            bg-img('./img/special_1')
        .text
          margin-left: 4px
          font-size: 10px
          line-height: 12px
    .supports-count
      position: absolute
      right: 12px
      bottom: 14px
      height: 24px
      line-height: 24px
      background-color: rgba(0,0,0,0.2)
      padding: 0 8px
      border-radius: 14px
      text-align: center
      .count
        vertical-align: top
        font-size: 10px
      .icon-keyboard_arrow_right
        margin-left: 2px
        line-height: 24px
        font-size: 10px
  .bulletin-wrap
    position: relative
    height: 28px
    line-height: 28px
    padding: 0 28px 0 12px
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    background-color: rgba(7, 17, 127, 0.2)
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 8px
      width: 22px
      height: 12px
      bg-img('./img/bulletin')
      background-repeat: no-repeat
      background-size: 22px 12px
    .text
      vertical-align: top
      font-size: 10px
      margin-left: 8px
    .icon-keyboard_arrow_right
      position: absolute
      right: 12px
      top: 50%
      margin-top: -6px
      display: inline-block
      font-size: 10px
</style>
