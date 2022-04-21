export default {
    genderFilter(state, payload) {
        state.filterFriends = state.friendList.filter(friend => friend.gender === payload.gender)
    },
    addContact(state, payload) {
        state.friendList.push(payload)
    },
    setContacts(state, payload) {
        state.friendList = payload
    },
    setActiveContact(state, payload) {
        state.activeContact = Object.assign(state.activeContact, payload)
    },
}