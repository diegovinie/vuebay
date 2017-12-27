import Vue from 'vue'
import axios from 'axios'

// Vue.use(axios)

axios.defaults.baseURL = 'https://api.mercadolibre.com'

export default {
    data(){
        return {
            a: 'hola'
        }
    },
    // methods: {
    //     retSearch: (query) => {
    //         axios.get('/search?q='+query)
    //         .then(res => {
    //             console.log(res)
    //         })
    //     }
    // }
    retSearch(q){
        console.log(q)
        axios.get('/sites/MLV/search?q='+q)
        .then(res => {
            console.log(res.data)
        })
        .catch(err =>{
            console.log('error ', err)
        })
    }

}