import Vue from 'vue'
import App from './App.vue'
import element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
import 'element-ui/lib/theme-chalk/index.css'

import NavBar from './components/NavBar'

Vue.use(element, {locale})

Vue.component('nav-bar', NavBar)

new Vue({
  el: '#app',
  render: h => h(App)
})
