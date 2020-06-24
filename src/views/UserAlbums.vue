<template>
    <div id="user-albums-box">
        <h3>Album List</h3>
        <b-card-text v-for="album in allAlbums" v-bind:key="album.id">
            <b-link :to="{ name: 'AlbumDetails', params: { id: album.id } }">{{ album.title }}</b-link>
        </b-card-text>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'UserAlbums',
    props: ["id"],
    computed: {
        ...mapGetters(["albums"]),
        allAlbums() {
            const allAlbums = []
            for(let i = 0; i < this.albums.length; i++){
                if(this.albums[i].userId === this.id){
                    allAlbums.push(this.albums[i])
                }
            }
            return allAlbums
        }
    },
    created() {
        this.$store.dispatch("getAlbums", { currentPage: 1, perPage: 5 })
    }
}    
</script>

<style scoped>
#user-albums-box {
    position: absolute;
    top: 100px;
    right: 650px;
}    
</style>