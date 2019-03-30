import Vue from 'vue'
import App from './App.vue'
console.log(App)

const a = e => console.log(e)
a(2)

new Vue({
  el: '#app',
  render: h => h(App)
})
