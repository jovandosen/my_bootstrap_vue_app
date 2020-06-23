<template>
    <b-col>
        <b-card
            v-bind:title="comment.name | cut_comment_name"
            tag="article"
            class="mb-2 mr-2"
        >
            <b-card-text>
                {{ comment.body | cut_comment_body }}
            </b-card-text>
            <b-link :to="{ name: 'CommentDetails', params: { id: comment.id } }">Read more</b-link>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: 'CommentCard',
    props: ["comment"],
    filters: {
        cut_comment_name: function (value) {
            if(!value) return ''
            value = value.toString()
            value = value.trim()
            if(value.length > 15) {
                value = value.slice(0, 15)
                value = value + '...'
                return value
            }
            return value    
        },
        cut_comment_body: function (value) {
            if(!value) return ''
            value = value.toString()
            value = value.trim()
            if(value.length > 70) {
                value = value.slice(0, 70)
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