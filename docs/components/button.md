---
API:
  - name: type
    type: String
    parameters: filled, border, flat, line, gradient, relief
    description: 特效不同的按钮
    default: filled
  - name: color
    type: String
    parameters: primary, warning, error, disbaled, RGB, HEX
    description: 按钮的颜色
    default: primary
  - name: text-color
    type: String
    parameters: RGB, HEX
    description: 单独控制按钮的文字颜色
    default: null
  - name: line-origin
    type: String
    parameters: left, center, right
    description: 线条出现的方向
    default: center
  - name: line-position
    type: String
    parameters: top, bottom
    description: 线条出现在上面还是下面
    default: center
  - name: gradient-direction
    type: String
    parameters: null
    description: Determine the angle of the gradient on the button
    default: 30 deg
  - name: gradient-color-secondary
    type: String
    parameters: null
    description: Change the secondary color on the button (gradient)
    default: primary
  - name: radius
    type: Boolean
    parameters: null
    description: Change button radius to circle
    default: false
  - name: to
    type: String | Object
    parameters: null
    description: Added router push navigation to button
    default: false
  - name: href
    type: String | Object
    parameters: null
    description: Added href property to button
    default: null
  - name: target
    type: Boolean
    parameters: null
    description: Presence or absence of target property
    default: false
---

# Buttons

<box>

## Filled

`type=filled` 单色填充按钮，hover 时阴影

<vuecode md center>
<div slot="demo">
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
</div>

<div slot="code">

```html
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
```

</div>
</vuecode>
</box>

<box>

## Border

`type=border` 单色边框透明背景按钮，hover 时半透明背景

<vuecode md center>
<div slot="demo">
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
</div>

<div slot="code">

```html
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
```

</div>
</vuecode>
</box>

<box>

## Flat

`type=flat` 无边框透明背景按钮，hover 时半透明背景

<vuecode md center>
<div slot="demo">
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

<div slot="code">

```html
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
```

</div>
</vuecode>
</box>

<box>

## Line

`type=line` 只有上或下边框的透明背景按钮，hover 时边框出现动画

`left-position` 控制动画的起点

`line-position` 控制边框的位置

<vuecode md center>
<div slot="demo">
<bili-button color="primary" type="line">primary</bili-button>
<bili-button color="warning" line-position="top" type="line"
  >warning</bili-button
>
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
</div>

<div slot="code">

```html
<bili-button color="primary" type="line">primary</bili-button>
<bili-button color="warning" line-position="top" type="line"
  >warning</bili-button
>
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
```

</div>
</vuecode>
</box>
