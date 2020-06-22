<template>
    <b-col md="6">
        <b-card
            v-bind:title="user.name"
            img-src="https://picsum.photos/600/300/?image=24"
            v-bind:img-alt="user.name"
            img-top
            tag="article"
            style="max-width: 40rem;"
            class="mb-2 mr-2"
            footer="User data"
        >
            <b-card-text>
                {{ user.email }}
            </b-card-text>
            <b-link :to="{ name: 'UserDetails', params: { id: user.id } }">Read more</b-link>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: 'UserCard',
    props: ["user"]
}    
</script>

<style scoped>
    
</style>