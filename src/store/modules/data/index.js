import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

export default {
    namespaced: true,
    state() {
        return {
            todos: [
                {
                    title: 'Save',
                    body: 'Save your contacts on the cloud. Your contact list are safe with us and con only be accessed by you only',
                    image: './../../assets/save.png'
                },
                {
                    title: 'Get',
                    body: 'Easy access to your contact list at your own convinience. Retrieve your contact list if lostthrough any means',
                    image: './../../assets/get.svg'
                }
            ],
            friendList: [],
            filterFriends: [],
            activeContact: {},
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
}