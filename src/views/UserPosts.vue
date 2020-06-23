<template>
    <div id="user-posts-box">
        <h3>Post List</h3>
        <b-card-text v-for="post in allPosts" v-bind:key="post.id">
            <b-link :to="{ name: 'PostDetails', params: { id: post.id } }">{{ post.title }}</b-link>
        </b-card-text>  
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'UserPosts',
    props: ["id"],
    computed: {
        ...mapGetters(["posts"]),
        allPosts() {
            const allPosts = []
            for(let i = 0; i < this.posts.length; i++){
                if(this.posts[i].userId === this.id){
                    allPosts.push(this.posts[i])
                }
            }
            return allPosts
        }
    },
    created() {
        this.$store.dispatch("getPosts", { currentPage: 1, perPage: 4 })
    }
}    
</script>

<style scoped>
#user-posts-box {
    position: absolute;
    top: 100px;
    right: 550px;
}    
</style>