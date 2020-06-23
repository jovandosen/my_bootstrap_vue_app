import axios from 'axios'

const state = {
    comments: [],
    commentRows: 0,
    displayComments: []
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
    }
}
const actions = {
    async getComments({ commit }, details) {
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}