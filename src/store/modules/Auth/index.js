import getters from './getters'
import mutations from './mutations'
import actions from './actions'


export default {
    state: {
        userId: null,
        token: null,
        user: null,
    },
    getters: getters,
    mutations: mutations,
    actions: actions
}