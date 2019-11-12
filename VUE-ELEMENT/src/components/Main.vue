<template>
    <div class="main-content">
        <!-- 头部的header -->
        <Header></Header>
        <slide></slide>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
import Header from '@/common/Header'
import slide from '@/common/slide'
export default {
    name:'mainContent',
    data(){
        return{
        }
    },
    components:{
        Header,
        slide
    }
}
</script>

<style scoped>
    .content{
        padding-left: 200px;
    }
</style>