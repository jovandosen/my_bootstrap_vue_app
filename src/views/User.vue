<template>
    <b-container>
        <b-row class="text-left">
            <b-col>
                <b-card
                    v-bind:title="user.name"
                    img-src="https://picsum.photos/600/300/?image=24"
                    v-bind:img-alt="user.name"
                    img-left
                >
                    <hr>
                    <h5>General info:</h5>
                    <b-card-text>
                        <strong>Username:</strong> {{ user.username }}
                    </b-card-text>
                    <b-card-text>
                        <strong>Email:</strong> {{ user.email }}
                    </b-card-text>
                    <hr>
                    <h5>Address details:</h5>
                    <b-card-text>
                        <strong>City:</strong> {{ address.city }}
                    </b-card-text>
                    <b-card-text>
                        <strong>Street:</strong> {{ address.street }}
                    </b-card-text>
                    <b-card-text>
                        <strong>Suite:</strong> {{ address.suite }}
                    </b-card-text>
                    <b-card-text>
                        <strong>Zipcode:</strong> {{ address.zipcode }}
                    </b-card-text>
                    <hr>
                    <h5>Contact info:</h5>
                    <b-card-text>
                        <strong>Phone:</strong> {{ user.phone }}
                    </b-card-text>
                    <b-card-text>
                        <strong>Website:</strong> {{ user.website }}
                    </b-card-text>
                    <hr>
                    <h5>Company details:</h5>
                    <b-card-text>
                        <strong>Company Name:</strong> {{ company.name }}
                    </b-card-text>
                    <b-card-text>
                        <strong>Catch Phrase:</strong> {{ company.catchPhrase }}
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'User',
    props: ["id"],
    data() {
        return {
            user: {},
            address: {},
            company: {}
        }
    },
    computed: {
        ...mapGetters(["users"])
    },
    methods: {
        getUserDetails(id) {
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].id === id){
                    this.user = this.users[i]
                }
            }
            this.address = this.user.address
            this.company = this.user.company
        }
    },
    mounted() {
        this.getUserDetails(this.id)
    }
}    
</script>

<style scoped>
    
</style>