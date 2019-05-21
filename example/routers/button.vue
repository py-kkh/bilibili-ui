<style lang="styl">
.icon-box {
  display: flex;
  align-items: center;
}
</style>
<template>
  <div>
    <br>
    <h2>filled</h2>
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
    <h2>border</h2>
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
    <br>
    <h2>line</h2>
    <br>
    <bili-button color="primary" type="line">primary</bili-button>
    <bili-button color="warning" line-position="top" type="line">warning</bili-button>
    <bili-button color="error" left-position="left" type="line">error</bili-button>
    <bili-button disabled color="disbaled" type="line">disabled</bili-button>
    <bili-button color="#6cf" left-position="right" type="line">#6cf</bili-button>
    <bili-button color="rgb(134, 4, 98)" type="line">rgb</bili-button>
    <bili-button color="primary" type="line">
      <div class="icon-box">
        <span class="iconfont icon-wucan"></span>
        <span>拉面</span>
      </div>
    </bili-button>
    <br>
    <br>
    <h2>solid</h2>
    <br>
    <bili-button color="primary" type="solid">primary</bili-button>
    <bili-button color="warning" type="solid">warning</bili-button>
    <bili-button color="error" type="solid">error</bili-button>
    <bili-button disabled color="disbaled" type="solid">disabled</bili-button>
    <bili-button color="#6cf" type="solid">#6cf</bili-button>
    <bili-button color="rgb(134, 4, 98)" type="solid">rgb</bili-button>
    <bili-button color="primary" type="solid">
      <div class="icon-box">
        <span class="iconfont icon-wucan"></span>
        <span>拉面</span>
      </div>
    </bili-button>
    <br>
    <br>
    <h2>size</h2>
    <br>
    <bili-button color="primary" size="small">primary</bili-button>
    <bili-button color="warning">warning</bili-button>
    <bili-button color="error" size="large">error</bili-button>
    <bili-button color="#6cf" size="100px">#6cf</bili-button>
    <bili-button color="rgb(134, 4, 98)" size="50px" radius>rgb</bili-button>
    <bili-button color="primary" radius>
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