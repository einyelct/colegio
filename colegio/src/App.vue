<template>
  <div>
    <div class="container">
      <nave/>
      <!-- Contenido -->
      <router-view></router-view>
      <!-- Contenido -->
    </div>
  </div>
</template>

<script lang="ts">
 import nave from './components/barra_nav.vue';

export default {
  name: 'App',
  components: {
     nave
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
  margin-top: 60px;
}
</style>
