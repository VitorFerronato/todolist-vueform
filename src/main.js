// path/to/main.(js|ts)

import { createApp } from 'vue'
import App from './App.vue'
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'
import "./style.css";

const app = createApp(App)
app.use(Vueform, vueformConfig)
app.mount('#app') 
 
 
 
 
