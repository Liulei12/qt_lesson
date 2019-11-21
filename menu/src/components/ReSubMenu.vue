软工张凤 20:58:08
<template>
    <!-- 容器组件 -->
    <SubMenu>
        <template #title>{{data.title}}</template>
        <MenuItem v-for="child in data.children" :key="child.id" v-if="!child.children">{{child.title}}</MenuItem>
        <ReSubMenu :data="child" v-else></ReSubMenu>
    </SubMenu>
</template>
<script>
import SubMenu from './SubMenu'
import MenuItem from './MenuItem'
export default {
    name: 'ReSubMenu',
    props:['data'],
    components:{
        SubMenu,
        MenuItem
    }
}
</script>

软工张凤 20:58:17
<template>
    <div class="subMenu">
        <span @click="change">
            <slot name="title"></slot>
            <i v-if="!isShow">+</i>
            <i v-if="isShow">-</i>
        </span>
        <ul v-if="isShow">
            <slot></slot>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isShow: false
        }
    },
    methods:{
        change(){
            this.isShow = !this.isShow
        }
    }
}
</script>
<style lang="stylus">
.subMenu {
  span {
    display: block;
    padding: 5px;
    background: #4cb4e7;
    color: #fff;
    border-bottom: 1px solid #fff;
    position: relative;
    i{
        position: absolute;
        right:10px;
        bottom:5px;
        font-style:normal;
        font-weight: bold;
    }
  }
  li{
      background: #e2dbb2;
  }
}
</style>

