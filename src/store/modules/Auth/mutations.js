export default {
    setUser(state, payload) {
        state.userId = payload.userId
        state.token = payload.token
    },
    clearUser(state) {
        state.userId = null
        state.token = null
    }
}