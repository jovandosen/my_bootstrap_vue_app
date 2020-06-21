<template>
    <div id="app">
        <div class="page" v-if="showSpinner">
            <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
        </div>
        <div class="page" v-if="postSpinner">
            <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
        </div>
        <div id="nav">
            <top-header></top-header>
        </div>
        <router-view/>
    </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue"
import { mapGetters } from 'vuex'

export default {
    name: "App",
    components: {
        TopHeader
    },
    computed: {
        ...mapGetters(["showSpinner", "postSpinner"])
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
</style>
