<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <child1 :msg="msg" v-bind="test" :add="fn"><ild1> -->
    <!-- <child2><ild2> -->
    <!-- <child3 @fromChild="hh"><ild3> -->
    <!-- <span>{{message}}</span> -->
    <router-view/>
  </div>
</template>

<script>
import child1 from '@/components/common/child1.vue'
import child2 from '@/components/common/child2.vue'
import child3 from '@/components/common/child3.vue'

export default {
  name: 'App',
  data(){
    return {
      msg: 'hhh',
      test: {
        a:1,
        b:2
      },
      count: 1,
      message: '父组件默认数据'
    }
  },
  components: {
    child1,
    child2,
    child3
  },
  methods: {
    fn(){
      console.log(123)
      this.count++
    },
    hh(e){
      this.message = e
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>