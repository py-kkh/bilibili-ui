<template>
  <div id="app">
    hello world
    <button></button>
  </div>
</template>

<script>
import Button from './components/button/index.vue'
export default {
  name: 'App',
  components: {
    Button
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  transform: rotate(0deg);
}
</style>