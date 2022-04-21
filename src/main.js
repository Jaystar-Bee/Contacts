import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'


import BaseButton from './components/UI/BaseButton.vue'
import BaseLoader from './components/UI/BaseLoader.vue'
import BaseDialog from './components/UI/BaseDialog.vue'
import SuccessSignal from './components/UI/SuccessSignal.vue'
import ErrorSignal from './components/UI/ErrorSignal.vue'
import ListLoader from './components/UI/ListLoader.vue'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-loader', BaseLoader)
app.component('base-dialog', BaseDialog)
app.component('base-success', SuccessSignal)
app.component('base-error', ErrorSignal)
app.component('list-loader', ListLoader)


app.use(store).use(router).mount('#app')
