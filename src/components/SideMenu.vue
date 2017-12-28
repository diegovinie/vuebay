<template>
  <div>
      <p>Categorías:</p>
      <el-select v-model="category">
          <el-option v-for="cat in categories" :key="cat.id" :label="cat.name" :value="cat.id"></el-option>
      </el-select>
      <el-card>
          <div slot="header" class="clearfix">Lugares:</div>
          <div class="text item" v-for="loc in locations" :key="loc.id">
              <el-badge :value="loc.quantity" class="item"><el-button type="text">{{ loc.state_name }}</el-button></el-badge>
          </div>
      </el-card>
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
            },
            list: function(){
                return store.state.list
            },
            locations(){
                return this.getLocations(this.list)
            }
        },
        methods: {
            getCategories(){
                api.retCategories()
                .then(res =>{
                    store.commit('updateCategories', res)
                })
            },
            
            /** 
             * Devuelve una lista de productos organizados por estado
             */
            getLocations(list){
 
                const locations = {
                    statesList: [],
                    states: []
                }

                // Revisa cada producto si está en statesList y lo añade a states
                list.forEach(function(item){
                    
                    // Si no hay nada en la búsqueda 
                    if(!item.address){
                        return null
                    }

                    let itemState = item.address.state_id

                    if(locations.statesList.indexOf(itemState) === -1){
                        locations.statesList.push(itemState)
                        locations.states.push({
                            state_id: itemState,
                            state_name: item.address.state_name,
                            quantity: 1,
                            products: [item]
                        })   
                    }
                    else{
                        let a = locations.states.find(function(e){
                            return e.state_id == itemState
                        })                       
                        a.products.push(item)
                        a.quantity++
                    }
                })
                // Retorna sólo el array de estados
                return locations.states              
            }
        },
        created(){
            this.getCategories()
        }
    }
</script>
