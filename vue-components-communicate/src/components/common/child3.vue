<template>
    <div class="chid3">
        <p @click="change">{{msg}}</p>
    </div>
</template>
<script>
// import bus from '@s/index.js'
export default {
    name: 'demo',
    data(){
        return{
            msg: '点击改变数据'
        }
    },
    created(){
        this.$bus.$on('child3',(arg)=>{
            this.msg = arg
        })
    },
    beforeDestroy(){
        this.$bus.$off('child3')
    },
    methods:{
        change(){
            this.$emit('fromChild', this.msg)
        }
    }
}
</script>
