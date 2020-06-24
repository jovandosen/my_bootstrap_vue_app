import axios from 'axios'

const state = {
    albums: [],
    albumRows: 0,
    displayAlbums: [],
    albumSpinner: false
}
const getters = {
    albums(state) {
        return state.albums
    },
    albumRows(state) {
        return state.albumRows
    },
    displayAlbums(state) {
        return state.displayAlbums
    },
    albumSpinner(state) {
        return state.albumSpinner
    }
}
const actions = {
    async getAlbums({ commit }, details) {
        axios.interceptors.request.use((config) => {
            // Do something before request is sent
            commit("setAlbumSpinner", true)
            return config;
        }, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });
        axios.interceptors.response.use((response) => {
            // Do something with response data
            commit("setAlbumSpinner", false)
            return response;
        }, (error) => {
            // Do something with response error
            return Promise.reject(error);
        });
        await axios.get('https://jsonplaceholder.typicode.com/albums')
                    .then(function(response){
                        commit("setAlbums", response.data)
                        commit("setAlbumRows", response.data.length)
                        const start = (details.currentPage - 1) * details.perPage
                        const end = (start + details.perPage)
                        commit("setDisplayAlbums", response.data.slice(start, end))
                    })
                    .catch(error => console.log(error))
    }
}
const mutations = {
    setAlbums(state, albums) {
        state.albums = albums
    },
    setAlbumRows(state, rows) {
        state.albumRows = rows
    },
    setDisplayAlbums(state, albums) {
        state.displayAlbums = albums
    },
    setAlbumSpinner(state, spinner) {
        state.albumSpinner = spinner
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}