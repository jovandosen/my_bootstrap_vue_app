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