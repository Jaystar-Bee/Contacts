import { createStore } from 'vuex'
import DataModule from './modules/data/index.js'
import authModule from './modules/Auth/index'

export default createStore({


  mutations: {
  },
  actions: {
  },
  modules: {
    data: DataModule,
    auth: authModule,
  }
})
