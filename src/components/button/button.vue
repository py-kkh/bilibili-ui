<template>
  <button
    ref="btn"
    name="button"
    :class="[`bili-button-${type}`,{
      'isActive':isActive,
      'includeIcon':icon,
      'includeIconOnly':icon && !$slots.default,
      'bili-radius':radius
    }, size,classes]"
    :style="[styles,{
      'width':/[px]/.test(size)?`${size}`:null,
      'height':/[px]/.test(size)?`${size}`:null
    }]"
    v-bind="$attrs"
    v-on="listeners"
  >
    <span v-if="$slots.default" class="bili-button-text-s">
      <slot/>
    </span>

    <!-- type === line 时的动画元素 -->
    <span ref="linex" :style="styleLine" class="bili-button-linex"/>
  </button>
</template>
<script>
import { oneOf, getColor } from '../../utils/helper'
const prefixCls = 'bili-button'
export default {
  name: 'BiliButton',
  props: {
    // 动效类型
    type: {
      default: 'border',
      validator(value) {
        return oneOf(value, [
          'filled',
          'border',
          'flat',
          'line',
          'gradient',
          'relief'
        ])
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
    // 图标
    icon: {
      type: String,
      default: null
    },
    // 图标在文字前还是文字后，true 为后
    iconAfter: {
      default: false,
      type: Boolean
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
      default: 'center',
      validator(value) {
        return oneOf(value, ['left', 'center', 'right'])
      }
    }
  },
  data() {
    return {
      isActive: false,
      isHover: false
    }
  },
  computed: {
    // 透传事件
    listeners() {
      return {
        ...this.$listeners,
        mouseover: event => this.mouseoverx(event),
        mouseout: event => this.mouseoutx(event)
        // click: event => this.clickButton(event),
        // blur: event => this.blurButton(event),
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
    }
  }
}
</script>
