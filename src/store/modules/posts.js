import axios from 'axios'

const state = {
    posts: []
}
const getters = {
    posts(state) {
        return state.posts
    }
}
const actions = {
    async getPosts({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit("setPosts", response.data)
    }
}
const mutations = {
    setPosts(state, posts) {
        state.posts = posts
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}