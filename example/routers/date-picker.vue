<style lang="styl">
.icon-box {
  display: flex;
  align-items: center;
}
</style>
<template>
  <div>
    <br>

    <br>
    <bili-date-picker :date="date"></bili-date-picker>
    <div style="width:3000px;height: 3000px"></div>
    <br>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      date: new Date().toDateString()
    }
  },
  methods: {}
}
</script>