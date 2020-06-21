<template>
    <b-container>
        <b-row align-v="center">
            <job-card v-for="job in displayJobs" v-bind:key="job.id" v-bind:name="job.name"></job-card>
        </b-row>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
            @input="paginate(currentPage)"
        ></b-pagination>
    </b-container>
</template>

<script>
import JobCard from '@/components/JobCard.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'Home',
    components: {
        JobCard
    },
    data() {
        return {
            currentPage: 1,
            perPage: 3
        }
    },
    computed: {
        ...mapGetters(["jobs", "displayJobs", "rows"])
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            await this.$store.dispatch("fetchJobs")
        },
        paginate(currentPage) {
            this.$store.dispatch("paginate", { currentPage, perPage: this.perPage })
        }
    }
}
</script>
