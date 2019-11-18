<template>
  <v-scroll ref="suggest" class="suggest" 
    :data="result"
    :pullup="pullup" 
    :beforeScroll="beforeScroll" 
    @scrollToEnd="searchMore" 
    @beforeScroll="listScroll">
    <ul class="suggest-list">
        <li class="suggest-item" 
        v-for="{item,index} in result" 
        :key="index" 
        @click="selectItem(item)">
            <div class="icon">
                <i class="icon">&#xe641;</i>
            </div>
            <div class="name">
                <p class="text" v-html="getDisplayName(item)"></p>
            </div>
        </li>
    </ul>
    <div class="no-result-wrapper" v-show="!result.length || !hasMore">
        <span>抱歉，暂无搜索结果</span>
    </div>
  </v-scroll>
</template>

<script>
import scroll from '@components/scroll'
import api from '@/api'
const limit = 20
export default {
    props:{
        query:{
            type:String,
            default:''
        }
    },
    data(){
        return{
        result:[],
        hasMore:true,
        pullup:true,
        beforeScroll:true,
        page:1
        }
    },
    components:{
        'v-scroll':scroll
    },
    methods:{
        refresh(){
            this.$refs.suggest.refresh()
        },
        fetchResult(page){
            const params = {
                limit,
                offset: page-1,
                keywords: this.query
            }
            api.MusicSearch(params).then( res =>{
                if (rs.code === 200){
                    this.result = [...this.result,...res.result.songs]
                }
            })
        }
    }
}
</script>

<style>

</style>