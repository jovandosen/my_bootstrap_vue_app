import axios from 'axios'

const state = {
    comments: [],
    commentRows: 0,
    displayComments: [],
    commentSpinner: false
}
const getters = {
    comments(state) {
        return state.comments
    },
    commentRows(state) {
        return state.commentRows
    },
    displayComments(state) {
        return state.displayComments
    },
    commentSpinner(state) {
        return state.commentSpinner
    }
}
const actions = {
    async getComments({ commit }, details) {
        axios.interceptors.request.use((config) => {
            // Do something before request is sent
            commit("setCommentSpinner", true)
            return config;
        }, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });
        axios.interceptors.response.use((response) => {
            // Do something with response data
            commit("setCommentSpinner", false)
            return response;
        }, (error) => {
            // Do something with response error
            return Promise.reject(error);
        });
        await axios.get('https://jsonplaceholder.typicode.com/comments')
                    .then(function(response){
                        commit("setComments", response.data)
                        commit("setCommentRows", response.data.length)
                        const start = (details.currentPage - 1) * details.perPage
                        const end = (start + details.perPage)
                        commit("setDisplayComments", response.data.slice(start, end))
                    })
                    .catch(error => console.log(error))
    }
}
const mutations = {
    setComments(state, comments) {
        state.comments = comments
    },
    setCommentRows(state, rows) {
        state.commentRows = rows
    },
    setDisplayComments(state, comments) {
        state.displayComments = comments
    },
    setCommentSpinner(state, spinner) {
        state.commentSpinner = spinner
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}