

<template>
  <nav class="sidebar">
      <router-link to="/">Home</router-link>
      <router-link to="/catalog">Catalog</router-link>
      <a>Poopsie</a>
      <a>Chimple</a>
      <a>Butt</a>
      <a>chimken</a>
  </nav>
</template>


<script>
export default {
  
}



</script>

<style scoped>
    .sidebar {
        float: left;
        height: 100%;
        position: fixed;
        width: 12%;
        /* top: 0;
        left: 0; */
        background-color: #111;
        overflow-x: hidden;
        /* margin-top: 5%;  */
        padding: 30px 10px;

    }

    .sidebar a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
    }

    .sidebar a:hover {
        color: #f1f1f1;
    }
</style>
