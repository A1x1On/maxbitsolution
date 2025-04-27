// Components
import App from './App.vue'
import { initGlobalData } from './globals'

import './styles/styles.scss'

// Composables
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

const pinia = createPinia()
const app = createApp(App)

initGlobalData(app)

app.use(router)
app.use(pinia)
app.mount('#app')
