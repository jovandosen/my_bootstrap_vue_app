<template>
    <b-container>
        <b-row>
            <b-col 
                v-for="photo in allPhotos" 
                v-bind:key="photo.id"
                md="2"
                class="image-box"
            >
                <b-link :to="{ name: 'PhotoDetails', params: { id: photo.id } }">
                    <b-img v-bind:src="photo.thumbnailUrl" fluid v-bind:alt="photo.title"></b-img>
                </b-link>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AlbumPhotos',
    props: ["id"],
    computed: {
        ...mapGetters(["photos"]),
        allPhotos() {
            const allPhotos = []
            for(let i = 0; i < this.photos.length; i++){
                if(this.photos[i].albumId === this.id){
                    allPhotos.push(this.photos[i])
                }
            }
            return allPhotos
        }
    },
    created() {
        this.$store.dispatch("getPhotos", { currentPage: 1, perPage: 10 })
    }
}    
</script>

<style scoped>
.image-box {
    margin-bottom: 10px;
}    
</style>