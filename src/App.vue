<template>
    <div id="app">
        <div class="page" v-if="showSpinner">
            <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
        </div>
        <div class="page" v-if="postSpinner">
            <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
        </div>
        <div class="page" v-if="userSpinner">
            <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
        </div>
        <div class="page" v-if="commentSpinner">
            <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
        </div>
        <div class="page" v-if="albumSpinner">
            <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
        </div>
        <div id="nav">
            <top-header></top-header>
        </div>
        <div id="go-back-button-box">
            <GoBackButton/>
        </div>
        <router-view/>
    </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue"
import GoBackButton from '@/components/GoBackButton.vue'
import { mapGetters } from 'vuex'

export default {
    name: "App",
    components: {
        TopHeader,
        GoBackButton
    },
    computed: {
        ...mapGetters(["showSpinner", "postSpinner", "userSpinner", "commentSpinner", "albumSpinner"])
    }
}  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
    margin-bottom: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: white;
}

.page {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    z-index: 25;
    width: 100%;
    height: 100%;
}

.spinner {
    position: relative;
    top: 50%;
}
#go-back-button-box {
    margin-left: 110px;
    margin-bottom: 10px;
}
</style>
