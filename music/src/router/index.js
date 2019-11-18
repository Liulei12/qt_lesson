import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/page/search'
import Recommend from '@/components/page/recommend'
import Singer from '@/components/page/singer'
import Rank from '@/components/page/rank'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    }
  ]
})
