<template>
  <div id="app">
    hello world
    <my-button>1</my-button>
  </div>
</template>

<script>
import MyButton from './components/button/index.vue'
export default {
  name: 'App',
  components: {
    MyButton
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