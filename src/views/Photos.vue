<template>
    <b-container class="photos-container" fluid>
        <b-row>
            <photo-card
                v-for="photo in displayPhotos"
                v-bind:key="photo.id"
                v-bind:photo="photo"
            ></photo-card>
        </b-row>
        <b-row class="photos-pagination-box">
            <b-col>
                <b-pagination
                    v-model="currentPage"
                    v-bind:total-rows="photoRows"
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
import PhotoCard from '@/components/PhotoCard.vue'

export default {
    name: 'Photos',
    data() {
        return {
            currentPage: 1,
            perPage: 10
        }
    },
    computed: {
        ...mapGetters(["photos", "photoRows", "displayPhotos"])
    },
    methods: {
        ...mapActions(["getPhotos"]),
        paginate(currentPage) {
            this.$store.dispatch("getPhotos", { currentPage: currentPage, perPage: this.perPage })
        }
    },
    mounted() {
        this.getPhotos({ currentPage: this.currentPage, perPage: this.perPage })
    },
    components: {
        PhotoCard
    }
}    
</script>

<style scoped>
.photos-container {
    padding-left: 125px;
    padding-right: 125px;
}     
.photos-pagination-box {
    margin-top: 30px;
}
</style>