<template>
  <el-form :inline="true" class="demo-form-inline" @submit.native.prevent="onSubmit(formInfo)">
      <el-form-item label="Buscar Productos:" size="mini"> 
        <el-input v-model="formInfo.query" placeholder="Buscar"></el-input>
      </el-form-item>
      <el-form-item size="mini">
          <el-button type="primary" @click="onSubmit(formInfo)">Buscar</el-button>
      </el-form-item>
      <el-form-item size="mini">
          <el-popover placement="right" title="Opciones" trigger="hover">
            <div class="item">
                <el-form-item label="Tipo de búsqueda">
                    <el-radio-group v-model="formInfo.local">
                        <el-radio label="0">global</el-radio>
                        <el-radio  label="1">en la categoría</el-radio>
                    </el-radio-group>
                </el-form-item>
            </div>
            <div class="item">Máximo número de resultados: 
                <el-select v-model="formInfo.limit">
                    <el-option v-for="n in 5" :key="n.id" :label="(n*10)" :value="(n*10)"></el-option></el-select></div>

            <el-button slot="reference">Opciones</el-button>
          </el-popover>
      </el-form-item>
  </el-form>
</template>

<script>
    import api from '../api'
    import store from '../store'

    export default {
        name: 'search',
        data(){
            return {
                formInfo: {
                    query: '',
                    limit: 10,
                    local: "0"
                },
            }
        },
        methods: {
            sub: (event) => {
                alert(event)
            },
            onSubmit: (form) =>{
                 const options = {
                    category: form.local != 0? "MLA5725" : null,
                    limit: form.limit
                }
                api.retSearch(form.query, options)
                .then(function(res){
                    store.commit('updateList', res.results)
                })
            }
        }
    }
</script>