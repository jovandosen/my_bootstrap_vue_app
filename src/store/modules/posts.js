import axios from 'axios'

const state = {
    posts: [],
    postRows: 0,
    postSpinner: false
}
const getters = {
    posts(state) {
        return state.posts
    },
    postRows(state) {
        return state.postRows
    },
    postSpinner(state) {
        return state.postSpinner
    }
}
const actions = {
    async getPosts({ commit }) {
        commit("setPostSpinner", true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit("setPosts", response.data)
        commit("setPostRows", response.data.length)
        commit("setPostSpinner", false)
    }
}
const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    },
    setPostRows(state, rows) {
        state.postRows = rows
    },
    setPostSpinner(state, spinner) {
        state.postSpinner = spinner
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}