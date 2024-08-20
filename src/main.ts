import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueLazyLoad from 'vue3-lazyload'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import lazyBackground from './plugins/lazyBackground'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(VueLazyLoad, {})
app.use(lazyBackground)

app.mount('#app')
