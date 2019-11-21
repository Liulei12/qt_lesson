import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 路由的懒加载
const home = r => require.ensure([],() => r(require('@/pages/home/home')),home)
// const home = r => require.ensure([],() => r(require('@/pages/home/home')),home)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      meta:{
        index:1
      },
      
      component:home
    },
    {
      path:'/category',
      component:category
    },
    // {
    //   path:'/search',
    //   component:search
    // },
   
    // {
    //   path:'/shopcart',
    //   component:shopcart
    // },
    // {
    //   path:'/order',
    //   component:order
    // },
    // {
    //   path:'/user',
    //   component:user
    // },
    // {
    //   path:'/register',
    //   component:register
    // },{
    //   path:'./path',
    //   component:path
    // },
    // {
    //   path:'/shipping',
    //   component:shipping
    // },
    // {
    //   path:'/payment',
    //   component:payment
    // },
    // {
    //   path:'/product/:id',
    //   component:productDetail
    // },
    // {
    //   path:'/profile',
    //   component:profile
    // },
    // {

    // }
  ]
})
