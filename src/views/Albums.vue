<template>
    <b-container class="comments-container" fluid>
        <b-row>
            <album-card 
                v-for="album in displayAlbums" 
                v-bind:key="album.id"
                v-bind:album="album"
            ></album-card>
        </b-row>
        <b-row>
            <b-col>
                <b-pagination
                    v-model="currentPage"
                    v-bind:total-rows="albumRows"
                    v-bind:per-page="perPage"
                    first-text="First"
                    prev-text="Prev"
                    next-text="Next"
                    last-text="Last"
                    @input="paginate(currentPage)"
                ></b-pagination>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AlbumCard from '@/components/AlbumCard.vue'

export default {
    name: 'Albums',
    data() {
        return {
            currentPage: 1,
            perPage: 5
        }
    },
    computed: {
        ...mapGetters(["albums", "albumRows", "displayAlbums"])
    },
    methods: {
        ...mapActions(["getAlbums"]),
        paginate(currentPage) {
            console.log(currentPage)
        }
    },
    mounted() {
        this.getAlbums()
    },
    components: {
        AlbumCard
    }
}    
</script>

<style scoped>
.comments-container {
    padding-left: 125px;
    padding-right: 125px;
}      
</style>