<template>
    <b-col>
        <b-card
            v-bind:title="album.title"
            tag="article"
            header="Album header content"
            footer="Album footer content"
        >
            <b-card-text>
                Album description text
            </b-card-text>
            <b-link :to="{ name: 'AlbumDetails', params: { id: album.id } }">Read more</b-link>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: 'AlbumCard',
    props: ["album"]
}    
</script>

<style scoped>
    
</style>