import axios from 'axios'

const state = {
    posts: [],
    postRows: 0,
    displayPosts: [],
    postSpinner: false
}
const getters = {
    posts(state) {
        return state.posts
    },
    postRows(state) {
        return state.postRows
    },
    displayPosts(state) {
        return state.displayPosts
    },
    postSpinner(state) {
        return state.postSpinner
    }
}
const actions = {
    async getPosts({ commit }, details) {
        commit("setPostSpinner", true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit("setPosts", response.data)
        commit("setPostRows", response.data.length)
        const start = (details.currentPage - 1) * details.perPage
        const end = (start + details.perPage)
        commit("setDisplayPosts", response.data.slice(start, end))
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
    setDisplayPosts(state, posts) {
        state.displayPosts = posts
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