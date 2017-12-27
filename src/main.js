import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
import 'element-ui/lib/theme-chalk/index.css'

import NavBar from './components/NavBar'

import store from './state'

import {foo, baf} from './pruebas'

console.log(foo)

Vue.use(element, {locale})
console.log(store.state.count)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/foo', component: foo},
    {path: '/baf', component: baf}
  ]

})

Vue.component('nav-bar', NavBar)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
