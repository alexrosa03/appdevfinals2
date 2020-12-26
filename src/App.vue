<template>
  <router-view></router-view>
</template>

<script>
// import header from './components/header.vue'
// import sidebar from './components/sidebar.vue'
// import footer from './components/footer.vue'


export default {
  name: 'App',
  components: {
    // 'eader': header,
    // 'side': sidebar,
    // 'foot': footer
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

  body {
    margin: auto;
  }
</style>
