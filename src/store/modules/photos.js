import axios from 'axios'

const state = {
    photos: [],
    photoRows: 0,
    displayPhotos: [],
    photoSpinner: false
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
    },
    photoSpinner(state) {
        return state.photoSpinner
    }
}
const actions = {
    async getPhotos({ commit }, details) {
        axios.interceptors.request.use((config) => {
            // Do something before request is sent
            commit("setPhotoSpinner", true)
            return config;
        }, (error) => {
            // Do something with request error
            return Promise.reject(error);
        });
        axios.interceptors.response.use((response) => {
            // Do something with response data
            commit("setPhotoSpinner", false)
            return response;
        }, (error) => {
            // Do something with response error
            return Promise.reject(error);
        });
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
    },
    setPhotoSpinner(state, spinner) {
        state.photoSpinner = spinner
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}