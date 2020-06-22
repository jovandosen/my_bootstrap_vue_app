<template>
    <b-container>
        <b-row>
            <user-card
                v-for="user in users" 
                v-bind:key="user.id"
                v-bind:user="user" 
            ></user-card>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserCard from '@/components/UserCard.vue'

export default {
    name: 'Users',
    computed: {
        ...mapGetters(["users"])
    },
    methods: {
        ...mapActions(["getUsers"])
    },
    mounted() {
        this.getUsers()
    },
    components: {
        UserCard
    }
}    
</script>

<style scoped>
    
</style>