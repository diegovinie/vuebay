<template>
    <el-menu theme="dark" class="el-menu-demo" mode="horizontal"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">VueBay</el-menu-item>
        <el-menu-item index="2">
        </el-menu-item>
    </el-menu>
</template>

<script>
    import api from '../api'
    import store from '../store'

    export default {
        name: 'nav-bar',
        data(){
            return {
                query: '',
            }
        },
        computed: {
            f: () => store.state.count,

        },
    }
</script>