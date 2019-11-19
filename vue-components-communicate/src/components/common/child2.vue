<template>
    <div class="child2">
        <p @click="emit">{{msg}}</p>
        <p @click="emitOther">{{msg2}}</p>
        <button @click="send">传值给child3</button>
    </div>
</template>
<script>
// import bus from '@s/index.js'
export default {
    name: 'demo',
    data() {
        return {
            msg: '女主人派发的事件',
            msg2:'女主人又派发事件了'
        }
    },
    created(){
        this.$on(['wash_clothes','wash_floor'],(arg)=>{console.log(arg)})
        // this.$on('wash_clothes', (arg)=>{
        //     console.log(`男主洗了${arg}衣服`)
        // }),
        // this.$on('wash_floor', (arg)=>{
        //     console.log(`男主拖地了`)
        // })
    },
    methods:{
        emit(){
            this.$emit('wash_clothes', ['baby', 'man'])
        },
        emitOther(){
            this.$emit('wash_floor',['ff','xx'])
        },
        send(){
            this.$bus.$emit('child3', this.msg)
        }
    }
}
</script>
