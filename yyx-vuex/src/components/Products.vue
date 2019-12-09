<template>
  <ul>
      <li v-for="product in products" :key="product.id">
          {{ product.title }} - {{ product.price }}
          <br>
          <button> Add to Cart </button>
      </li>
  </ul>
</template>

<script>
import { mapState,mapAction} from 'vuex';

export default {
    //组件的自身状态 不好共享,
    // 私有的,在多个使用它的状态里,不一致

    //组件数据的来源
    computed:mapState({
        products:state => state.products.all
    }),
    //生命周期
    created(){
        // Vue.use(Vuex);dispatch 派发动作的概念
        // 组件不再接触数据了,连API都不
        this.$store.dispatch('products/getAllProducts');
    }
}
</script>

<style>

</style>