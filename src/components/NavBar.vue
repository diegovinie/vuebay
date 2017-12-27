<template>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">VueBay</el-menu-item>
        <el-menu-item index="2">
            Buscar productos: <input type="text" v-model="query">
            <el-button size="mini" @click="doSearch(query)">Buscar</el-button>
        </el-menu-item>
        <el-menu-item index="3">{{ f }}</el-menu-item>
        
    </el-menu>
</template>

<script>
    import model from '../model/index'
    import store from '../state'

    export default {
        data(){
            return {
                query: '',
                // f: store.state.count
            }
        },
        computed: {
            f: () => store.state.count
        },
        methods: {
            doSearch(query){
                console.log('doSearch')
                store.commit('increment')
                window.location.href = '/#/baf'
                // model.retSearch(query)
                console.log(this.f)
                
            }
        },
        created: () => {
            console.log(store.state.count)
        }
    }
</script>