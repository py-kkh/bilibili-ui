<style lang="styl">
.icon-box {
  display: flex;
  align-items: center;
}
</style>
<template>
  <div>
    <br>
    <h2>flat</h2>
    <br>
    <bili-button color="primary" size="small">primary</bili-button>
    <bili-button color="warning">warning</bili-button>
    <bili-button color="error" size="large">error</bili-button>
    <bili-button color="#6cf" size="100px">#6cf</bili-button>
    <bili-button disabled color="disbaled">disabled</bili-button>
    <bili-button color="rgb(134, 4, 98)" size="50px" radius>rgb</bili-button>
    <bili-button color="primary" size="50px" radius>
      <div class="icon-box">
        <span class="iconfont icon-wucan"></span>
        <span>拉面</span>
      </div>
    </bili-button>
    <br>
  </div>
</template>
 
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>