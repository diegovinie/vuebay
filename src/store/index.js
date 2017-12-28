import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export default new vuex.Store({
    state: {
        categories: {},
        list: [{title: 'a'}, {title: 'c'}]
    },

    mutations: {

        updateList(state, info){
            state.list = info
        },
        updateCategories(state, info){
            state.categories = info
        }
    }
})