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
        axios.interceptors.request.use((config) => {
            // Do something before request is sent
            commit("setPostSpinner", true)
            return config;
        }, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });
        axios.interceptors.response.use((response) => {
            // Do something with response data
            commit("setPostSpinner", false)
            return response;
        }, (error) => {
            // Do something with response error
            return Promise.reject(error);
        });
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit("setPosts", response.data)
        commit("setPostRows", response.data.length)
        const start = (details.currentPage - 1) * details.perPage
        const end = (start + details.perPage)
        commit("setDisplayPosts", response.data.slice(start, end))
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