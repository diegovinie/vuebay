import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
    state: {
        count: 0
    },
    // data(){
    //     return {
    //         count: 0
    //     }
    // },
    mutations: {
        increment(state){
            console.log('increment')
            state.count++
        }

    }
})