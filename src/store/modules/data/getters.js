export default {
    todos(state) {
        return state.todos
    },
    friendList(state) {
        return state.friendList
    },
    filterFriends(state) {
        return state.filterFriends
    },
    hasFriend(state) {
        return state.friendList.length > 0
    },
    activeContact(state) {
        return state.activeContact
    },
}