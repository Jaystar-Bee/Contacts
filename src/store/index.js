import { createStore } from 'vuex'
import DataModule from './modules/data/index.js'
import authModule from './modules/Auth/index'

export default createStore({
  state: {
    // userId: 'User2',
  },
  getters: {
    // userId(state) {
    //   return state.userId
    // }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    data: DataModule,
    auth: authModule,
  }
})
