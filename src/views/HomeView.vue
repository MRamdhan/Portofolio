<template>
  <main>
    <Home />
  </main>
</template>

<style>
  .rounded-img {
    margin-left: 40px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    overflow: hidden;
  }
  .rounded-img img {
    width: 110%;
    height: 110%;
    object-fit: cover;
  }
  .text-large {
    font-size: 80px;
  }
  .main-container {
    max-width: 1200px;
    margin: 0;
  }

</style>

<script setup>
import Home from '../components/Home.vue'
</script>
