<template>
    <div>
        <h1>Page Not Found</h1>
        <b-img v-bind:src="require('../assets/not-found.jpg')" fluid alt="Not Found Image"></b-img>
        <p>
            Return to 
            <b-link to="/">Home</b-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}    
</script>

<style scoped>
    
</style>