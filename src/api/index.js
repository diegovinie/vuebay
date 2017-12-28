import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://api.mercadolibre.com'

export default {

    retSearch(q, options){
        return new Promise(function(resolve, reject){
            let url = '/sites/MLV/search?q=' + q 
                + (options.category? '&category='+options.category : '')
                + (options.limit? '&limit='+options.limit : '')

            console.log(url)    
            
            axios.get(url)
            .then(res => {
                resolve(res.data)
            })
            .catch(err =>{
                console.log('error ', err)
                reject(err)
            })

        })
    },

    retCategories(){
        return new Promise( (resolve, reject) => {
            axios.get('/sites/MLV/categories')
            .then(res => {
                resolve(res.data)
            })
            .catch(err =>{
                console.log('error ', err)
                reject(err)
            })
        })
    }
}