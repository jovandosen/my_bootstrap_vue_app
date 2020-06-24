<template>
    <b-container>
        <b-row>
            <b-col>
                <b-card
                    v-bind:title="photo.title"
                    tag="article"
                    v-bind:img-src="photo.url"
                    v-bind:img-alt="photo.title"
                    img-left
                >
                    <b-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Photo',
    props: ["id"],
    computed: {
        ...mapGetters(["photos"])
    },
    data() {
        return {
            photo: {}
        }
    },
    methods: {
        getPhotoDetails(id) {
            for(let i = 0; i < this.photos.length; i++){
                if(this.photos[i].id === id){
                    this.photo = this.photos[i]
                }
            }
        }
    },
    mounted() {
        this.getPhotoDetails(this.id)
    }
}    
</script>

<style scoped>
    
</style>