<template>
    <b-container>
        <b-row>
            <b-col>
                <h3 v-for="comment in allComments" v-bind:key="comment.id">{{ comment.name }}</h3>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'PostComments',
    props: ["id"],
    computed: {
        ...mapGetters(["comments"]),
        allComments() {
            const allComments = []
            for(let i = 0; i < this.comments.length; i++){
                if(this.comments[i].postId === this.id){
                    allComments.push(this.comments[i])
                }
            }
            return allComments 
        }
    },
    created() {
        this.$store.dispatch("getComments", { currentPage: 1, perPage: 5 })
    }
}    
</script>

<style scoped>
    
</style>