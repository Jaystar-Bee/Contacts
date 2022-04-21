import getters from './getters'
import mutations from './mutations'
import actions from './actions'


export default {
    state: {
        userId: 'User1',
        user: null,
    },
    getters: getters,
    mutations: mutations,
    actions: actions
}