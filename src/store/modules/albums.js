import axios from 'axios'

const state = {
    albums: [],
    albumRows: 0,
    displayAlbums: []
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
    }
}
const actions = {
    async getAlbums({ commit }) {
        await axios.get('https://jsonplaceholder.typicode.com/albums')
                    .then(function(response){
                        commit("setAlbums", response.data)
                        commit("setAlbumRows", response.data.length)
                        commit("setDisplayAlbums", response.data.slice(0, 5))
                        console.log(response)
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}