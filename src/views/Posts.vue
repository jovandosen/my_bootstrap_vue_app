<template>
    <b-container>
        <b-row>
            <post-card 
                v-for="post in posts" 
                v-bind:key="post.id" 
                v-bind:post="post"
            ></post-card>
        </b-row>
    </b-container>    
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostCard from '@/components/PostCard.vue'

export default {
    name: 'Posts',
    computed: {
        ...mapGetters(["posts"])    
    },
    methods: {
        ...mapActions(["getPosts"])
    },
    mounted() {
        this.getPosts()
    },
    components: {
        PostCard
    }
}    
</script>

<style scoped>
           
</style>       