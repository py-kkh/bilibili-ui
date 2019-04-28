<template>
  <button
    ref="btn"
    name="button"
    :class="[`bili-button-${type}`,{
      'isActive':isActive,
      'bili-radius':radius
    }, size,classes]"
    :style="[styles,{
      'width':/[px]/.test(size)?`${size}`:null,
      'height':/[px]/.test(size)?`${size}`:null
    }]"
    v-bind="$attrs"
    v-on="listeners"
  >
    <!-- 点击时的背景遮罩  -->
    <span
      v-if="type === 'filled' || type === 'border' || type === 'flat'"
      ref="backgroundx"
      :style="stylesBackGround"
      class="bili-button-backgroundx bili-button--background"
    ></span>
    <span v-if="$slots.default" class="bili-button--text">
      <slot/>
    </span>

    <!-- type === line 时的动画元素 -->
    <span ref="linex" :style="styleLine" class="bili-button-linex"/>
  </button>
</template>
<script>
import { oneOf, getColor, darken } from '../../utils/helper'
const prefixCls = 'bili-button'
export default {
  name: 'BiliButton',
  props: {
    // 动效类型
    type: {
      default: 'border',
      validator(value) {
        return oneOf(value, ['filled', 'border', 'flat', 'line', 'solid'])
      }
    },
    // 按钮主题
    color: {
      type: String,
      default: 'primary'
    },
    // 文字颜色
    textColor: {
      default: null,
      type: String
    },
    // 按钮大小
    size: {
      type: String,
      default: null
    },
    // true 时 为 圆按钮
    radius: {
      default: false,
      type: Boolean
    },
    // type == line 时 active 样式出现的起点
    leftPosition: {
      default: 'center',
      validator(value) {
        return oneOf(value, ['left', 'center', 'right'])
      }
    },
    // type == line 时 active 样式出现的位置 上中下
    linePosition: {
      default: 'bottom',
      validator(value) {
        return oneOf(value, ['top', 'bottom'])
      }
    }
  },
  data() {
    return {
      isActive: false,
      isHover: false,
      opacity: 1,
      leftBackgorund: 20,
      topBackgorund: 20,
      radio: 0,
      time: 0.3,
      timeOpacity: 0.3
    }
  },
  computed: {
    // 透传事件
    listeners() {
      return {
        ...this.$listeners,
        click: event => this.clickButton(event),
        blur: event => this.blurButton(event),
        mouseover: event => this.mouseoverx(event),
        mouseout: event => this.mouseoutx(event)
      }
    },
    // class
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.color}`]: !!this.color,
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ]
    },
    // style 主要是几种特效, 为css中未定义的颜色提供对应的效果
    styles() {
      let ret
      if (this.type === 'filled') {
        // 提供自定义 背景色 和 文字色功能，用以覆盖 css
        return {
          color: getColor(this.textColor, 1),
          background: getColor(this.color, 1),
          boxShadow: this.isHover
            ? `0px 8px 25px -8px ${getColor(this.color, 1)}`
            : null
        }
      }

      if (this.type === 'border' || this.type === 'flat') {
        return {
          border: `${this.type === 'flat' ? 0 : 1}px solid ${getColor(
            this.color,
            1
          )}`,
          background: this.isHover ? getColor(this.color, 0.1) : 'transparent',
          color: getColor(this.textColor, 1) || getColor(this.color, 1)
        }
      }

      if (this.type === 'line') {
        return {
          color: getColor(this.textColor, 1) || getColor(this.color, 1),
          borderBottomWidth: this.linePosition == 'bottom' ? `2px` : null,
          borderColor: `${getColor(this.color, 0.2)}`,
          borderTopWidth: this.linePosition == 'top' ? `2px` : null
        }
      }

      if (this.type === 'solid') {
        let color = getColor(this.color, 1)
        return {
          background: getColor(this.color, 1),
          boxShadow: `0 3px 0 0 ${darken(color, -0.4)}`
        }
      }

      return ret
    },
    styleLine() {
      // 默认即是 center
      let leftPosition = '50%'
      if (this.leftPosition == 'left') {
        leftPosition = '0%'
      } else if (this.leftPosition == 'right') {
        leftPosition = 'auto'
      }
      let styles = {
        top: this.linePosition == 'top' ? '-2px' : 'auto',
        bottom: this.linePosition == 'bottom' ? '-2px' : 'auto',
        background: getColor(this.color, 1),
        left: leftPosition,
        right: leftPosition == 'auto' ? '0px' : null,
        transform: leftPosition == '50%' ? 'translate(-50%)' : null
      }
      return styles
    },
    stylesBackGround() {
      let styles = {
        background:
          this.type === 'flat' || this.type === 'border'
            ? getColor(this.color, 1, false)
            : null,
        opacity: this.opacity,
        left: `${this.leftBackgorund}px`,
        top: `${this.topBackgorund}px`,
        borderRadius: this.radius ? '50%' : '0px',
        width: `${this.radio}px`,
        height: `${this.radio}px`,
        transition: `width ${this.time}s ease, height ${
          this.time
        }s ease, opacity ${this.timeOpacity}s ease`
      }

      return styles
    }
  },
  mounted() {},
  methods: {
    mouseoverx(event) {
      this.$emit('mouseover', event)
      this.isHover = true
    },
    mouseoutx(event) {
      this.$emit('mouseout', event)
      this.isHover = false
    },
    blurButton(event) {
      this.$emit('blur', event)
      if (this.type === 'border' || this.type === 'flat') {
        this.opacity = 0
        setTimeout(() => {
          this.radio = 0
        }, 150)
        this.isActive = false
      }
    },

    clickButton(event) {
      this.$emit('click', event)
      if (this.isActive) {
        return
      }
      this.isActive = true
      let btn = this.$refs.btn
      let xEvent = event.offsetX
      let yEvent = event.offsetY
      let radio = btn.clientWidth * 3
      this.time =
        btn.clientWidth /
        (btn.clientWidth +
          (this.type === 'border' || this.type === 'flat' ? 70 : 20))
      if (this.type === 'filled') {
        this.timeOpacity = this.time
      }

      if (event.srcElement ? event.srcElement != btn : false) {
        xEvent += event.target.offsetLeft
        yEvent += event.target.offsetTop
      }
      this.leftBackgorund = xEvent
      this.topBackgorund = yEvent
      this.radio = radio
      if (this.type === 'filled') {
        this.opacity = 0
      } else {
        this.opacity = 1
      }

      if (this.type === 'filled') {
        setTimeout(() => {
          this.time = this.timeOpacity = this.radio = 0
          this.opacity = 1
          this.isActive = false
        }, this.time * 1100)
      } else {
        setTimeout(() => {
          this.timeOpacity = 0.15
        }, this.time * 1100)
      }
    }
  }
}
</script>
