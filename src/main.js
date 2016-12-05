import Vue from 'vue'
import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import 'src/lib/global/plugins/font-awesome/css/font-awesome.min.css'
import 'src/lib/global/plugins/simple-line-icons/simple-line-icons.min.css'
import 'src/lib/global/plugins/bootstrap/css/bootstrap.min.css'
import 'src/lib/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css'
import 'src/lib/global/css/components.min.css'
import 'src/lib/global/css/plugins.min.css'
import 'src/lib/layouts/layout/css/layout.min.css'
import 'src/lib/layouts/layout/css/themes/darkblue.min.css'
import 'src/lib/layouts/layout/css/custom.min.css'
import 'src/lib/news-add/css/form.css'



Vue.use(ElementUI)
import App from './App'  

sync(store, router)

const app = new Vue({
  store,
  router,
  ...App
})

app.$mount('#app')
