import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

const pinia = createPinia().use(piniaPluginPersistedstate)

app.use(Router)

app.use(pinia)

app.mount('#app')
