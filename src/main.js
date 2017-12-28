// Módudos de Node
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
import 'element-ui/lib/theme-chalk/index.css'

// Componentes
import NavBar from './components/NavBar'
import List from './components/List'
import SideMenu from './components/SideMenu'
import Search from './components/Search'

// Store
import store from './store'

// Módulo de pruebas
// import {foo, baf} from './pruebas'

// Servicios
Vue.use(element, {locale})
Vue.use(VueRouter)

// Componentes
Vue.component('nav-bar', NavBar)
Vue.component('list', List)
Vue.component('side-menu', SideMenu)
Vue.component('search', Search)

// Rutas
const router = new VueRouter({
  routes: [
    // {path: '/foo', component: foo},
    // {path: '/baf', component: baf}
  ]
})


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
