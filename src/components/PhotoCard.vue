<template>
    <b-col>
        <b-card
            v-bind:title="photo.title | cut_photo_title"
            tag="article"
            v-bind:img-src="photo.thumbnailUrl"
            v-bind:img-alt="photo.title"
            img-top
            footer="Photo footer content"
        >
            <b-card-text>
                This is photo description.
            </b-card-text>
            <b-link :to="{ name: 'PhotoDetails', params: { id: photo.id } }">Read more</b-link>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: 'PostCard',
    props: ["photo"],
    filters: {
        cut_photo_title: function (value) {
            if(!value) return ''
            value = value.toString()
            value = value.trim()
            if(value.length > 5) {
                value = value.slice(0, 5)
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