<template>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">VueBay</el-menu-item>
        <el-menu-item index="2">
            Buscar productos: <input type="text" v-model="query">
            <el-button size="mini" @click="doSearch(query)">Buscar</el-button>
        </el-menu-item>
        
    </el-menu>
</template>

<script>
    export default {
        data(){
            return {
                query: ''
            }
        },
        methods: {
            doSearch(query){
                console.log(query);
                
            }
        }
    }
</script>