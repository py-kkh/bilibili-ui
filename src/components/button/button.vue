<template>
  <button
    ref="btn"
    name="button"
    :class="[`bili-btn-${type}`,{
      'isActive':isActive,
      'includeIcon':icon,
      'includeIconOnly':icon && !$slots.default,
      'vs-radius':radius
    }, size,classes]"
    :style="[styles,{
      'width':/[px]/.test(size)?`${size}`:null,
      'height':/[px]/.test(size)?`${size}`:null
    }]"
    v-bind="$attrs"
    v-on="listeners"
  >
    <!-- <span
      v-if="!is('line')&&!is('gradient')&&!is('relief')"
      ref="backgroundx"
      :style="stylesBackGround"
      class="vs-button-backgroundx vs-button--background"
    ></span>-->

    <!-- <vs-icon
      v-if="icon"
      :style="{
        'order':iconAfter?2:0,
        'margin-right':$slots.default&&!iconAfter?'5px':'0px',
        'margin-left':$slots.default&&iconAfter?'5px':'0px'
      }"
      :icon-pack="iconPack"
      :icon="icon"
      class="vs-button--icon"
    ></vs-icon>-->

    <span v-if="$slots.default" class="bili-btn-text-s bili-btn--text-s">
      <slot/>
    </span>

    <!-- type === line 时的动画元素 -->
    <span ref="linex" :style="styleLine" class="bili-btn-linex"/>
  </button>
</template>
<script>
import { oneOf, getColor } from '../../utils/helper'
const prefixCls = 'bili-btn'
export default {
  name: 'BiliButton',
  props: {
    // 动效类型
    type: {
      default: 'filled',
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
      default: 'primary',
      validator(value) {
        return oneOf(value, ['primary', 'warning', 'error', 'disbaled', 'text'])
      }
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
    // 使用的图标库的 前缀
    iconPack: {
      type: String,
      default: 'iconfont'
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
    // style 主要是几种特效
    styles() {
      let ret
      if (this.type === 'filled') {
        // 无需操作
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
  mounted() {
    console.log('----------------')
    console.log(this.type)
  },
  methods: {
    mouseoverx(event) {
      console.log('--------22--------')
      console.log(event)

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
