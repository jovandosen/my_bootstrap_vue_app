<template>
    <b-col md="4" lg="3">
        <b-card
            v-bind:title="post.title | cut_data"
            img-src="https://picsum.photos/600/300/?image=25"
            v-bind:img-alt="post.title"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2 mr-2"
            footer="Post data"
        >
            <b-card-text>
                {{ post.body | cut_data }}
            </b-card-text>
            <b-link :to="{ name: 'PostDetails', params: { id: post.id } }">Read more</b-link>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: 'PostCard',
    props: ["post"],
    filters: {
        cut_data: function (value) {
            if(!value) return ''
            value = value.toString()
            value = value.trim()
            if(value.length > 15) {
                value = value.slice(0, 15)
                value = value + '...'
                return value
            }
            return value    
        }
    }
}    
</script>

<style scoped>
    
</style>