import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import Store from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


const app = createApp(App)

app.use(Router)
app.use(Store)
app.mount('#app')