import "./assets/styles/reset.css"
import "./assets/styles/default.css"
import "./assets/fonts/fonts.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')