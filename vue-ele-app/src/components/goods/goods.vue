<template>
    <div>
        <div class="goods">
            <div class="menu-wrapper" ref="menuWrapper">
                <ul>
                    <!-- key 为唯一标识，item 为每一项内容 -->
                    <li v-for="(item,index) in goods" :key="index" class="menu-item" @click="selectorMenu(index,$event)" :class="{'current': currentIndex === index}">
                        <span class="text border-1px">
                            <span class="icon" :class="classMap[item.type]"></span>
                            {{item.name}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="foodWrapper">
                <ul>
                    <li v-for="(item, index) in goods" :key="index" class="food-list" ref="foodList" :class="{'current':currentIndex === index}">
                        <h1 class="title">{{item.name}}</h1>
                        <ul>
                            <li v-for="(food,index) in item.foods" :key="index" class="food-item border-1px">
                                <div class="icon"><img :src="food.image" alt="" width="57" height="57"></div>
                                <div class="content">
                                    <h2 class="name">{{food.name}}</h2>
                                    <p class="desc">{{food.description}}</p>
                                    <div class="extra">
                                        <span class="count">月售{{food.sellCount}}份</span>
                                        <span>好评率{{food.rating}}%</span>
                                    </div>
                                    <div class="price">
                                        <div class="now">￥{{food.price}}</div>
                                        <div class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</div>
                                    </div>
                                    <div class="cartcontrol-wrapper">
                                        <cartcontrol :food="food" @add="addFood"></cartcontrol>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <shopcart ref="shopcart" :selectFoods="selectFoods" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import cartcontrol from '@/components/cartcontrol/cartcontrol.vue'
import shopcart from '@/components/shopcart/shopcart.vue'

export default {
    // name: 'goods',
    props: {
        seller: {
            type: Object
        }
    },
    data(){
        return {
            goods: [],
            classMap: [],
            // currentIndex: 0,
            listHeight: [],
            scrollY: 0
        }
    },
    methods: {
        _initScroll() {
            this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                click: true
            })
            this.foodScroll = new BScroll(this.$refs.foodWrapper, {
                click: true,
                probeType: 3
            })
            this.foodScroll.on('scroll', pos => { 
                this.scrollY = Math.abs(Math.round(pos.y))

            })
        },
        selectorMenu(index, event){
            // this.currentIndex = index
            let foodList = this.$refs.foodList
            let el = foodList[index]
            this.foodScroll.scrollToElement(el, 300)
        },
        _calculateHeight(){
            let foodList = this.$refs.foodList
            let height = 0
            this.listHeight.push(height)
            for(let i = 0; i < foodList.length; i++) {
                let item = foodList[i]
                height += item.clientHeight
                this.listHeight.push(height)
            }
        },
        addFood(target){
            // console.log(123)
            this._drop(target)
        },
        _drop(target){
            this.$nextTick(() => {
                this.$refs.shopcart.drop(target)
            })
        }
    },
    computed:{
        currentIndex(){
            for(let i = 0; i < this.listHeight.length; i++){
                let height1 = this.listHeight[i]
                let height2 = this.listHeight[i + 1]
                if(!height2 || (this.scrollY >= height1 && this.scrollY < height2)){
                    console.log(i)
                    return i
                }
            }
            return 0
        },
        selectFoods(){
            let foods = []
            this.goods.forEach((good) => {
                good.foods.forEach( (food)=>{
                    if(food.count){
                        foods.push(food)
                    }
                })
            })
            return foods
        }
    },
    components:{
        cartcontrol,
        shopcart
    },
    created(){
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        this.$http.get('http://localhost:8080/static/goods.json').then(res => {
            // console.log(res)
            if(res.data.errno === 0) {
                this.goods = res.data.data
                this.$nextTick(() => {//dom渲染加载完成才执行
                    this._initScroll()
                    this._calculateHeight()
                })
            }
        })
    }
}

</script>
<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl';
.border-1px
  border-bottom 1px solid rgba(7, 17, 27, 0.1)
  border-1px(rgba(7, 17, 27, 0.1))

.goods
  display flex
  position absolute
  top 174px
  bottom 46px
  width 100%
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #ffffff
        font-weight 700
      .text
        border-none()
        display table-cell
        width 56px
        vertical-align middle
        border-1px(rgba(7,17,27,0.1))
        font-size 12px
        .icon
          display inline-block
          vertical-align top 
          width 12px
          height 12px
          margin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease {
            bg-image('decrease_3');
          }

          &.discount {
            bg-image('discount_3');
          }

          &.guarantee {
            bg-image('guarantee_3');
          }

          &.invoice {
            bg-image('invoice_3');
          }

          &.special {
            bg-image('special_3');
          }
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0

      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc,.extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px

</style>