<template>
    <b-container fluid>
        <b-row class="rowStyle">
            <post-card 
                v-for="post in displayPosts" 
                v-bind:key="post.id" 
                v-bind:post="post"
            ></post-card>
        </b-row>
        <b-row class="rowStyle">
            <b-col>
                <b-pagination
                    v-model="currentPage"
                    v-bind:total-rows="postRows"
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
import PostCard from '@/components/PostCard.vue'

export default {
    name: 'Posts',
    computed: {
        ...mapGetters(["posts", "postRows", "displayPosts"])    
    },
    data() {
        return {
            currentPage: 1,
            perPage: 4
        }
    },
    methods: {
        ...mapActions(["getPosts"]),
        paginate(currentPage) {
            this.$store.dispatch("getPosts", { currentPage: currentPage, perPage: this.perPage })
        }
    },
    mounted() {
        this.getPosts({ currentPage: this.currentPage, perPage: this.perPage })
    },
    components: {
        PostCard
    }
}    
</script>

<style scoped>
.rowStyle {
    margin-left: 5%;
}           
</style>       