<template>
    <div>
        <b-col>
            <b-card
                title="This is a Card"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Job-info"
                img-top
                tag="article"
                style="max-width: 20rem"
                class="mb-3"
                footer="Card Footer"
            >
                <b-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </b-card-text>
                <b-button variant="primary">Apply</b-button>
            </b-card>
        </b-col>
    </div>
</template>

<script>
export default {
    name: "JobCard"
}    
</script>

<style scoped>
    
</style>