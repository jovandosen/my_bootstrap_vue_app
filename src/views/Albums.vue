<template>
    <b-container class="comments-container" fluid>
        <b-row>
            <album-card 
                v-for="album in displayAlbums" 
                v-bind:key="album.id"
                v-bind:album="album"
            ></album-card>
        </b-row>
        <b-row class="pagination-box">
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
            this.$store.dispatch("getAlbums", { currentPage: currentPage, perPage: this.perPage })
        }
    },
    mounted() {
        this.getAlbums({ currentPage: this.currentPage, perPage: this.perPage })
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
.pagination-box {
    margin-top: 30px;
}   
</style>