import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import './registerServiceWorker'
import { initializeApp } from "firebase/app";


import BaseButton from './components/UI/BaseButton.vue'
import BaseLoader from './components/UI/BaseLoader.vue'
import BaseDialog from './components/UI/BaseDialog.vue'
import SuccessSignal from './components/UI/SuccessSignal.vue'
import ErrorSignal from './components/UI/ErrorSignal.vue'
import ListLoader from './components/UI/ListLoader.vue'
import './registerServiceWorker'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-loader', BaseLoader)
app.component('base-dialog', BaseDialog)
app.component('base-success', SuccessSignal)
app.component('base-error', ErrorSignal)
app.component('list-loader', ListLoader)

const firebaseConfig = {
    apiKey: "AIzaSyDe7sspDKi4krhDY3Spq-Nm1_RBmFv2_JY",
    authDomain: "contacts-8b9b7.firebaseapp.com",
    databaseURL: "https://contacts-8b9b7-default-rtdb.firebaseio.com",
    projectId: "contacts-8b9b7",
    storageBucket: "contacts-8b9b7.appspot.com",
    messagingSenderId: "760745989277",
    appId: "1:760745989277:web:9ca2759b5b8ca4bb5b7074",
    measurementId: "G-9YTCC7TWR8"
};
initializeApp(firebaseConfig)

app.use(store).use(router).mount('#app')
