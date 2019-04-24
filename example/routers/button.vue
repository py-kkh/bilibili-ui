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
    <bili-button color="primary" type="flat">primary</bili-button>
    <bili-button color="warning" type="flat">warning</bili-button>
    <bili-button color="error" type="flat">error</bili-button>
    <bili-button disabled color="disbaled" type="flat">disabled</bili-button>
    <bili-button color="#6cf" type="flat">#6cf</bili-button>
    <bili-button color="rgb(134, 4, 98)" type="flat">rgb</bili-button>
    <bili-button color="primary" type="flat">
      <div class="icon-box">
        <span class="iconfont icon-wucan"></span>
        <span>拉面</span>
      </div>
    </bili-button>
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