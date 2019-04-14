<style lang="styl">
.icon-box {
  display: flex;
  align-items: center;
}
</style>
<template>
  <div>
    <h2>filled</h2>
    <h6>maybe we don't need icon component</h6>
    <br>
    <bili-button color="primary" type="filled">primary</bili-button>
    <bili-button color="warning" type="filled">warning</bili-button>
    <bili-button color="error" type="filled">error</bili-button>
    <bili-button disabled color="disbaled" type="filled">disabled</bili-button>
    <bili-button color="#6cf" type="filled">#6cf</bili-button>
    <bili-button color="rgb(134, 4, 98)" type="filled">rgb</bili-button>
    <bili-button color="primary" type="filled">
      <div class="icon-box">
        <span class="iconfont icon-wucan"></span>
        <span>拉面</span>
      </div>
    </bili-button>
    <br>
    <br>
    <h2>type</h2>
    <br>
    <bili-button color="primary" type="border">primary</bili-button>
    <bili-button color="warning" type="border">warning</bili-button>
    <bili-button color="error" type="border">error</bili-button>
    <bili-button disabled color="disbaled" type="border">disabled</bili-button>
    <bili-button color="#6cf" type="border">#6cf</bili-button>
    <bili-button color="rgb(134, 4, 98)" type="border">rgb</bili-button>
    <bili-button color="primary" type="border">
      <div class="icon-box">
        <span class="iconfont icon-wucan"></span>
        <span>拉面</span>
      </div>
    </bili-button>
    <br>
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
    return {
      a: 1
    }
  },
  methods: {}
}
</script>