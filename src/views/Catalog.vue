<template>
    <div>
        <div id="app">
            <vuehead/>
            <side/>
            <foot/>
        </div>

        <div class="content">



        <h1>Is this working?</h1>
        <!-- code for the page goes here -->
        </div>
    </div>

</template>

<script>
import header from '../components/header.vue'
import sidebar from '../components/sidebar.vue'
import footer from '../components/footer.vue'

export default {
  name: 'App',
  components: {
    'vuehead': header,
    'side': sidebar,
    'foot': footer
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