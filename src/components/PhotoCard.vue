<template>
    <b-col>
        <b-card
            v-bind:title="photo.title"
            tag="article"
            header="Photo header content"
            footer="Photo footer content"
        ></b-card>
    </b-col>
</template>

<script>
export default {
    name: 'PostCard',
    props: ["photo"]
}    
</script>

<style scoped>
    
</style>