<template>
    <el-row>
        <div id="list">
            <el-col :span="8" v-for="(item, index) in items" :key="item.id" :index="index">
                <el-card class="box-card">
                    <div slot="header">
                        <span>{{ item.title }}</span>
                    </div>
                    <img :src="item.thumbnail" class="image" width="80%" style="max-height:100px;">
    
                    <div class="text item">{{ item.condition }}</div>
                    <div class="text item"><b>Precio: </b>{{item.price}}</div>
                    <a :href="item.permalink">Ir ML</a>
                </el-card>
            </el-col>
        </div>
        <el-pagination class="el-col-24"
            @current-change="handle"
            layout="prev, pager, next"
            :total="totalPages"
            :page-size="4">
        </el-pagination>
    </el-row>
</template>

<script>
import store from '../store'
import {pager, changePage} from '../functions'

export default {
    data(){
        return {
            totalPages: 0,
            a: ''
        }
    },
    computed: {
        items: () => store.state.list
    },
    methods: {
        handle(v){
            console.log('handle: ', v);
            changePage(v)
            
        },
        pag(){
            console.log(document.getElementById('list'));
            pager(document.getElementById('list'), 10)

        }
    },
    // watch: {
    //     items: (value) =>{
    //         console.log('watcher')
    //         pager(document.getElementById('list'), 4)
    //         pagination(1)
    //     }
    // },
    mounted() {
       this.totalPages = pager(document.getElementById('list'), 4)
       changePage(1)
    },
    updated(){
        this.totalPages = pager(document.getElementById('list'), 4)
        console.log('total: ', this.totalPages);
        
        changePage(1)
    }
}
</script>
