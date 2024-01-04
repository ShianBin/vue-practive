<template>
  <Header />
  <div id="app">
    <router-view />
  </div>
  <Footer />
</template>

<script setup>
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
</script>

<style scoped>
#app {
  padding-top: 60px; /* 與 header 的高度相匹配或稍高一些 */
}
</style>
