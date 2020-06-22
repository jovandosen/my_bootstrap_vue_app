<template>
    <b-container>
        <b-row>
            <user-card
                v-for="user in displayUsers" 
                v-bind:key="user.id"
                v-bind:user="user" 
            ></user-card>
        </b-row>
        <b-row>
            <b-col>
                <b-pagination
                    v-model="currentPage"
                    v-bind:total-rows="userRows"
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
import UserCard from '@/components/UserCard.vue'

export default {
    name: 'Users',
    computed: {
        ...mapGetters(["users", "userRows", "displayUsers"])
    },
    data() {
        return {
            currentPage: 1,
            perPage: 2
        }
    },
    methods: {
        ...mapActions(["getUsers"]),
        paginate(currentPage) {
            this.$store.dispatch("getUsers", { currentPage: currentPage, perPage: this.perPage })
        }
    },
    mounted() {
        this.getUsers({ currentPage: this.currentPage, perPage: this.perPage })
    },
    components: {
        UserCard
    }
}    
</script>

<style scoped>
    
</style>