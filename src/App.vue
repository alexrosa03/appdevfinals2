<template>
  <div id="app">
    <eader/>
      <side/>
      <router-view/>
    <foot/>

  </div>
</template>

<script>
import header from './components/header.vue'
import sidebar from './components/sidebar.vue'
import footer from './components/footer.vue'
// import content from './components/content.vue'

export default {
  name: 'App',
  components: {
    'eader': header,
    'side': sidebar,
    'foot': footer
    // 'cont': content
  }
}
</script>

<style>
  .content {
    float: right;
    position: sticky;
    width: 88%;
    padding-left: 20px;
  }
</style>
