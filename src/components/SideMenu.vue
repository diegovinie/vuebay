<template>
  <div>
      <p>Categorías:</p>
      <el-select v-model="category">
          <el-option v-for="cat in categories" :key="cat.id" :label="cat.name" :value="cat.id"></el-option>
      </el-select>
  </div>
</template>

<script>
    import store from '../store'
    import api from '../api'

    export default {
        data(){
            return {
                category: {}
            }
        },
        computed: {
            categories: function(){
                return store.state.categories
            }
        },
        methods: {
            getCategories(){
                api.retCategories()
                .then(res =>{
                    store.commit('updateCategories', res)
                })
            }
        },
        created(){
            this.getCategories()
        }
    }
</script>
