<template>
    <b-container fluid>
        <b-row class="text-left">
            <b-col>
                <b-button variant="outline-secondary" @click="goBack">Go Back</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'GoBackButton',
    methods: {
        goBack() {
            return this.$router.go(-1)
        }
    }
}    
</script>

<style scoped>
    
</style>