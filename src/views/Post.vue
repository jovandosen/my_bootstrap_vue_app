<template>
    <b-container>
        <b-row class="text-center">
            <b-col>
                <h1>{{ post.title }}</h1>
                <p>{{ post.body }}</p>
                <router-link :to="{ name: 'PostComments', params: { id: this.id } }">view comments</router-link>
                <router-view :key="$route.path"></router-view>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Post',
    props: ["id"],
    computed: {
        ...mapGetters(["posts"])
    },
    data() {
        return {
            post: {}
        }
    },
    methods: {
        getPostDetails(id) {
            for(let i = 0; i < this.posts.length; i++){
                if(this.posts[i].id === id){
                    this.post = this.posts[i]
                }
            }
        }
    },
    mounted() {
        this.getPostDetails(this.id)
    }
}    
</script>

<style scoped>
    
</style>