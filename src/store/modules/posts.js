import axios from 'axios'

const state = {
    posts: [],
    postSpinner: false
}
const getters = {
    posts(state) {
        return state.posts
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
        commit("setPostSpinner", false)
    }
}
const mutations = {
    setPosts(state, posts) {
        state.posts = posts
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