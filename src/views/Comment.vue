<template>
    <b-container>
        <b-row>
            <b-col>
                <h1>{{ comment.name }}</h1>
                <p>{{ comment.body }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Comment',
    props: ["id"],
    computed: {
        ...mapGetters(["comments"])
    },
    data() {
        return {
            comment: {}
        }
    },
    methods: {
        getCommentDetails(id) {
            for(let i = 0; i < this.comments.length; i++){
                if(this.comments[i].id === id){
                    this.comment = this.comments[i]
                }
            }
        }
    },
    mounted() {
        this.getCommentDetails(this.id)
    }
}    
</script>

<style scoped>
    
</style>