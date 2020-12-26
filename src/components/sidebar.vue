

<template>
  <nav class="sidebar">
      <router-link to="/home">Home</router-link>
      <router-link to="/catalog">Catalog</router-link>
      <router-link to="/add-patient">New Patient</router-link>
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
        background-color: #111;
        overflow-x: hidden;
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
