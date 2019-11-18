<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box @query="onQueryChange" ref="searchBox"></search-box>
    </div>
    <div class="shortcut-wrapper" ref="shortcutWrapper" v-show="!query">
      <v-scroll class="shortcut" ref="shortcut" :data="shortcut" :refreshDelay="refreshDelay">
        <div>
          <!-- 热门搜索 -->
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li class="item" v-for="(item, index) in hotKey" :key="index">
                <span>{{item.first}}</span>
              </li>
            </ul>
          </div>
          <!-- 搜索历史 -->
          <div v-show="searchHistory.length" class="search-history">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear">
                <i class="icon">&#xe612;</i>
              </span>
            </h1>
            <!-- 搜索历史列表 -->
            <search-list :searches="searchHistory" @select="addQuery" @delete="delQuery"></search-list>
          </div>
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
// import { MusicSearch } from '@/api/index.js'
import searchBox from '@/componentsarchBox'
import scroll from '@/components/scroll'
import searchList from '@/components/searchList'
export default {
  name: 'search',
  data () {
    return {
      query: '',
      shortcut: [],
      refreshDelay: 0,
      hotKey: [
        {first: '要放假了'},
        {first: '要放假了ad'},
        {first: '要放假了ggg'}
      ],
      searchHistory: [1]
    }
  },
  components: {
    searchBox,
    'v-scroll': scroll,
    searchList
  },
  methods: {
    onQueryChange (val) {
    },
    addQuery (item) {},
    delQuery (item) {}
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function'
.search
  overflow hidden
  &-box-wrapper
    margin px2rem(40px)
  .shortcut-wrapper
    position fixed
    top px2rem(360px)
    bottom 0
    width 100%
    .shortcut
      height 100%
      overflow hidden
      .hot-key
        margin 0 px2rem(40px) px2rem(40px) px2rem(40px)
        .title
          margin-bottom px2rem(40px)
          font-size 14px
          color hsla(0, 0%, 100%, .5)
        .item
          display inline-block
          padding px2rem(16px) px2rem(20px)
          margin px2rem(10px)
          border-radius 6px
          font-size 14px
          color hsla(0, 0%, 100%, 0.3)
          background #2f3054
</style>
