<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>{{ album.title }}</h1>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Album',
    props: ["id"],
    computed: {
        ...mapGetters(["albums"])
    },
    data() {
        return {
            album: {}
        }
    },
    methods: {
        getAlbumDetails(id) {
            for(let i = 0; i < this.albums.length; i++){
                if(this.albums[i].id === id){
                    this.album = this.albums[i]
                }
            }
        }
    },
    mounted() {
        this.getAlbumDetails(this.id)
    }
}    
</script>

<style scoped>
    
</style>