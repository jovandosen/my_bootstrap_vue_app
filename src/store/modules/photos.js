import axios from 'axios'

const state = {
    photos: [],
    photoRows: 0,
    displayPhotos: []
}
const getters = {
    photos(state) {
        return state.photos
    },
    photoRows(state) {
        return state.photoRows
    },
    displayPhotos(state) {
        return state.displayPhotos
    }
}
const actions = {
    async getPhotos({ commit }, details) {
        await axios.get('https://jsonplaceholder.typicode.com/photos')
                    .then(function(response){
                        commit("setPhotos", response.data)
                        commit("setPhotoRows", response.data.length)
                        const start = (details.currentPage - 1) * details.perPage
                        const end = (start + details.perPage)
                        commit("setDisplayPhotos", response.data.slice(start, end))
                    })
                    .catch(error => console.log(error))
    }
}
const mutations = {
    setPhotos(state, photos) {
        state.photos = photos
    },
    setPhotoRows(state, rows) {
        state.photoRows = rows
    },
    setDisplayPhotos(state, photos) {
        state.displayPhotos = photos
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}