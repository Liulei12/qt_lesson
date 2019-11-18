<template>
    <div>
        <div class="shopcart">
            <div class="content">
                <div class="content-left">
                    <div class="logo-wrapper">
                        <div class="logo" :class="{'highlight': totalnum > 0}">
                            <i class="icon-shopping_cart" :class="{'highlight': totalnum > 0}"></i>
                        </div>
                        <div class="num" v-show="totalnum > 0">{{totalnum}}</div>
                    </div>
                    <div class="price" :class="{'highlight': totalnum > 0}">￥{{totalPrice>0 ? totalPrice : 0}}</div>
                    <div class="desc">另需配送费 {{deliveryPrice}}￥</div>
                </div>
                <div class="content-right">
                    <div class="pay" :class="payClass">{{payDasc}}</div>
                </div>
            </div>
            <div class="ball-container">
                <div v-for="(ball, index) in balls" :key="index">
                    <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
                        <div class="ball" v-show="ball.show">
                            <div class="inner inner-book"></div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        selectFoods: {
            type: Array,
            default(){
                return [
                    {
                        price: 0,
                        count: 0
                    }
                ]
            }
        },
        deliveryPrice: {
            type: Number,
            default: 0
        },
        minPrice: {
            type: Number,
            default: 0
        }
    },
    computed:{
        totalPrice(){
            // this.selectFoods.reduce((pre,next)=>{
            //     return (pre.count * pre.price + next.count * next.price)
            // },0)
            let total = 0
            this.selectFoods.forEach(food => {
                total += food.count*food.price
            });
            return total
        },
        totalnum(){
            let count = 0
            this.selectFoods.forEach(food => {
                count += food.count
            });
            return count
        },
        payDasc(){
            if (this.totalPrice === 0){
                return `￥${this.minPrice}起送`
            }else if(this.totalPrice < this.minPrice){
                return `还差￥${this.minPrice - this.totalPrice}起送`
            }else{
                return  '去结算'
            }
        },
        payClass(){
            return this.payDasc == '去结算'? 'enough' : 'not-enough'
        }
    },
    data(){
        return {
            balls: [
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                },
                {
                    show: false
                },
            ],
            dropBalls: []
        }
    },
    methods: {
        beforeDrop(el){
          let count = this.balls.length
          while(count--) {
            let ball = this.balls[count]
            if(ball.show) {
              let rect = ball.el.getBoundingClientRect()
              let x = rect.left - 32
              let y = -(window.innerHeight - rect.top - 22)
              el.style.display = ''
              el.style.webkitTransform = `translate3d(0, ${y}px,0)`
              el.style.transform = `translate3d(0, ${y}px,0)`
              let inner = document.getElementsByClassName('inner-book')[0]
              inner.style.transform = `translate3d(${x}px, 0, 0)`
              inner.style.webkitTransform = `translate3d(${x}px, 0, 0)`
            }
          }
        },
        dropping(el, done){
          let rf = el.offsetHeight
          this.$nextTick(() => {
            el.style.transform = 'translate3d(0, 0,0)'
            el.style.webkitTransform = 'translate3d(0, 0,0)'
            let inner = document.getElementsByClassName('inner-book')[0]
            inner.style.transform = 'translate3d(0, 0, 0)'
            inner.style.webkitTransform = 'translate3d(0, 0, 0)'
            el.addEventListener('transitionend', done)
          })
        },
        afterDrop(el){
          let ball = this.dropBalls.shift()
          if(ball){
            ball.show = false
            el.style.display = 'none'
          }
        },
        drop(el){
          for(let i = 0;i < this.balls.length; i++){
            let ball = this.balls[i]
            if(!ball.show){
              ball.show = true
              ball.el = el
              this.dropBalls.push(ball)
              return
            }
          }
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"

  .shopcart
    position: fixed
    left: 0
    bottom: 0
    z-index: 50
    width: 100%
    height: 48px
    .content
      display: flex
      background: #141d27
      font-size: 0
      color: rgba(255, 255, 255, 0.4)
      .content-left
        flex: 1
        .logo-wrapper
          display: inline-block
          vertical-align: top
          position: relative
          top: -10px
          margin: 0 12px
          padding: 6px
          width: 56px
          height: 56px
          box-sizing: border-box
          border-radius: 50%
          background: #141d27
          .logo
            width: 100%
            height: 100%
            border-radius: 50%
            text-align: center
            background: #2b343c
            &.highlight
              background: rgb(0, 160, 220)
            .icon-shopping_cart
              line-height: 44px
              font-size: 24px
              color: #80858a
              &.highlight
                color: #fff
          .num
            position: absolute
            top: 0
            right: 0
            width: 24px
            height: 16px
            line-height: 16px
            text-align: center
            border-radius: 16px
            font-size: 9px
            font-weight: 700
            color: #fff
            background: rgb(240, 20, 20)
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
        .price
          display: inline-block
          vertical-align: top
          margin-top: 12px
          line-height: 24px
          padding-right: 12px
          box-sizing: border-box
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          font-size: 16px
          font-weight: 700
          &.highlight
            color: #fff
        .desc
          display: inline-block
          vertical-align: top
          margin: 12px 0 0 12px
          line-height: 24px
          font-size: 10px
      .content-right
        flex: 0 0 105px
        width: 105px
        .pay
          height: 48px
          line-height: 48px
          text-align: center
          font-size: 12px
          font-weight: 700
          &.not-enough
            background: #2b333b
          &.enough
            background: #00b43c
            color: #fff
    .ball-container
      .ball
        position: fixed
        left: 32px
        bottom: 22px
        z-index: 200
        transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41)
        .inner
          width: 16px
          height: 16px
          border-radius: 50%
          background: rgb(0, 160, 220)
          transition: all 0.4s linear
    .shopcart-list
      position: absolute
      left: 0
      top: 0
      z-index: -1
      width: 100%
      transform: translate3d(0, -100%, 0)
      &.fold-enter-active, &.fold-leave-active
        transition: all 0.5s
      &.fold-enter, &.fold-leave-active
        transform: translate3d(0, 0, 0)
      .list-header
        height: 40px
        line-height: 40px
        padding: 0 18px
        background: #f3f5f7
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        .title
          float: left
          font-size: 14px
          color: rgb(7, 17, 27)
        .empty
          float: right
          font-size: 12px
          color: rgb(0, 160, 220)

      .list-content
        padding: 0 18px
        max-height: 217px
        overflow: hidden
        background: #fff
        .food
          position: relative
          padding: 12px 0
          box-sizing: border-box
          border-1px(rgba(7, 17, 27, 0.1))
          .name
            line-height: 24px
            font-size: 14px
            color: rgb(7, 17, 27)
          .price
            position: absolute
            right: 90px
            bottom: 12px
            line-height: 24px
            font-size: 14px
            font-weight: 700
            color: rgb(240, 20, 20)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 6px

  .list-mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 40
    backdrop-filter: blur(10px)
    opacity: 1
    background: rgba(7, 17, 27, 0.6)
    &.fade-enter-active, &.fade-leave-active
      transition: all 0.5s
    &.fade-enter, &.fade-leave-active
      opacity: 0
      background: rgba(7, 17, 27, 0)
</style>