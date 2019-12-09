import Vue from 'vue'
import Vuex, { mapGetters, mapActions } from 'vuex'

// Vue prototype Vuex功能?
// 借 mapActions mapGetters this.$store this.$router
Vue.use(Vuex);

const state = {
    count: 0 //状态树里的状态
}
const mutations = {
    //修改状态

}
const actions = {

}
const getters = {

}
//四大家族
// mapGetters mapActions this.$store 
export default new Vuex.Store({
    state,mutations,actions,getters
})