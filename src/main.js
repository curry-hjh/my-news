import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import './styles/iconfont.css'
import 'lib-flexible'
import axios from 'axios'
import HmButton from './components/hm-button.vue'
import HmInput from './components/hm-input.vue'
import HmHomeList from './components/hm-home-list.vue'
import HmFocusList from './components/hm-focus-list.vue'
import { Button, Toast } from 'vant'

Vue.use(Button)
Vue.use(Toast)
Vue.component('HmButton', HmButton)
Vue.component('HmInput', HmInput)
Vue.component('HmHomeList', HmHomeList)
Vue.component('HmFocusList', HmFocusList)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
