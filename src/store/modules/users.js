import axios from 'axios'

const state = {
    users: [],
    userRows: 0,
    displayUsers: [],
    userSpinner: false
}
const getters = {
    users(state) {
        return state.users
    },
    userRows(state) {
        return state.userRows
    },
    displayUsers(state) {
        return state.displayUsers
    },
    userSpinner(state) {
        return state.userSpinner
    }
}
const actions = {
    async getUsers({ commit }, details) {
        axios.interceptors.request.use((config) => {
            // Do something before request is sent
            commit("setUserSpinner", true)
            return config;
        }, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });
        axios.interceptors.response.use((response) => {
            // Do something with response data
            commit("setUserSpinner", false)
            return response;
        }, (error) => {
            // Do something with response error
            return Promise.reject(error);
        });
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit("setUsers", response.data)
        commit("setUserRows", response.data.length)
        const start = (details.currentPage - 1) * details.perPage
        const end = (start + details.perPage)
        commit("setDisplayUsers", response.data.slice(start, end))
    }
}
const mutations = {
    setUsers(state, users) {
        state.users = users
    },
    setUserRows(state, rows) {
        state.userRows = rows
    },
    setDisplayUsers(state, users) {
        state.displayUsers = users
    },
    setUserSpinner(state, spinner) {
        state.userSpinner = spinner
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}