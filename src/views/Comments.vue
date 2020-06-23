<template>
    <b-container class="comments-container" fluid>
        <b-row>
            <comment-card 
                v-for="comment in displayComments" 
                v-bind:key="comment.id"
                v-bind:comment="comment"
            >
            </comment-card>
        </b-row>
        <b-row>
            <b-col>
                <b-pagination
                    v-model="currentPage"
                    v-bind:total-rows="commentRows"
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
import CommentCard from '@/components/CommentCard.vue'

export default {
    name: 'Comments',
    data() {
        return {
            currentPage: 1,
            perPage: 5
        }
    },
    computed: {
        ...mapGetters(["comments", "commentRows", "displayComments"])
    },
    methods: {
        ...mapActions(["getComments"]),
        paginate(currentPage) {
            this.$store.dispatch("getComments", { currentPage: currentPage, perPage: this.perPage })
        }
    },
    mounted() {
        this.getComments({ currentPage: this.currentPage, perPage: this.perPage })
    },
    components: {
        CommentCard
    }
}    
</script>

<style scoped>
.comments-container {
    padding-left: 125px;
    padding-right: 125px;
}    
</style>