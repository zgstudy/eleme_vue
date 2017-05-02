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
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="supports-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrap" @click="showDetail">
      <span class="icon"></span><span class="text">{{seller.bulletin}}</span><i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar" width="100%" alt="">
    </div>
    <transition name="fade">
      <div v-show="detailShow" class="detail">
        <div class="detail-wrap clearfix">
          <div class="detail-main">
            <h1 class="title">{{seller.name}}</h1>
            <div class="star-wrap">
              <v-star :size="48" :score="seller.score"></v-star>
            </div>
            <div class="line-info">
              <p class="txt">优惠信息</p>
            </div>
            <ul v-if="seller.supports" class="support-list">
              <li v-for="support in seller.supports" class="support-item">
                <span class="icon" :class="classMap[support.type]"></span>
                <span class="text">{{support.description}}</span>
              </li>
            </ul>
            <div class="line-info">
              <p class="txt">商家公告</p>
            </div>
            <p class="bulletin">{{seller.bulletin}}</p>
          </div>
        </div>
        <div class="detail-close" @click="closeDetail"><i class="icon-close"></i></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Star from '@/components/star/star';
export default {
  name: 'header',
  components: {
    'v-star': Star
  },
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false
    };
  },
  methods: {
    showDetail () {
      this.detailShow = true;
    },
    closeDetail () {
      this.detailShow = false;
    }
  },
  created () {
    // 支持相关信息根据type编写成数组，方便读取对应的标识icon图片
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
  }
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';
.header
  position: relative
  overflow: hidden
  color: #fff
  background-color: rgba(7, 17, 27, 0.5)
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
      .support
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
    background-color: rgba(7, 17, 27, 0.2)
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
  .background
    position: absolute
    left: 0
    top: 0
    width: 100%
    height: 100%
    z-index: -1

    filter: blur(10px)
  .detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    background-color: rgba(7, 17, 27, 0.8)
    backdrop-filter: blur(10px)
    .detail-wrap
      width: 100%
      min-height: 100%
      .detail-main
        margin: 64px 36px 0
        padding-bottom: 64px
        .title
          font-size: 16px
          line-height: 16px
          font-weight: 700
          text-align: center
        .star-wrap
          margin: 16px auto 0
          text-align: center
        .line-info
          display: flex
          margin: 30px 0 24px
          &::before
            position: relative
            display: block
            content: ''
            flex: 1
            top: -6px
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
          &::after
            position: relative
            display: block
            content: ''
            flex: 1
            top: -6px
            border-bottom: 1px solid rgba(255, 255, 255, 0.2)
          .txt
            font-size: 14px
            font-weight: 700
            padding: 0 12px
        .support-list
          margin: 0 12px
          .support-item
            font-size: 0
            margin-top: 12px
            .icon
              display: inline-block
              vertical-align: top
              width: 16px
              height: 16px
              background-size: 16px 16px
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
              margin-left: 6px
              font-size: 12px
              line-height: 14px
        .bulletin
          margin: 0 12px
          font-size: 12px
          line-height: 24px
    .detail-close
      margin: -64px auto 0
      width: 32px
      height: 32px
      font-size: 32px
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
