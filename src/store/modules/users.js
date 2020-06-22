import axios from 'axios'

const state = {
    users: []
}
const getters = {
    users(state) {
        return state.users
    }
}
const actions = {
    async getUsers({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit("setUsers", response.data)
    }
}
const mutations = {
    setUsers(state, users) {
        state.users = users
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}