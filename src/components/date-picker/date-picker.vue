<template>
  <div class="bili-date-picker-wrapper">
    <div ref="textWrap" class="text-wrap" @click="clickTextWrap">点我开关日历</div>
    <transition name="fade">
      <div v-if="isShow" :class="classes" :style="styles">
        2
        <br>22
        <br>22
        <br>22
        <br>22
        <br>22
        <br>2
      </div>
    </transition>
  </div>
</template>
<script>
import { oneOf, getColor } from '../../utils/helper'
const prefixCls = 'bili-date-picker'

const containerWidth = 340
const containerHeight = 400

export default {
  name: 'BiliDatePicker',
  /**
   * func
   * onChange
   * onCancel
   */
  props: {
    date: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    withClear: {
      type: Boolean,
      default: false
    },
    autoOk: {
      type: Boolean,
      default: false
    },
    weekdayNames: {
      type: Array,
      default: () => []
    },
    weekdayShortNames: {
      type: Array,
      default: () => []
    },
    monthNames: {
      type: Array,
      default: () => []
    },
    yearStart: {
      type: Number,
      default: 1917
    },
    yearEnd: {
      type: Number,
      default: 2200
    },
    format: {
      type: Function,
      default: v => v
    }
  },
  data() {
    return {
      // 日历浮层的定位
      position: {},
      isShow: true
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners
      }
    },
    styles() {
      return {
        left: this.position.left + 'px',
        top: this.position.top + 'px'
      }
    },
    // class
    classes() {
      return [`${prefixCls}`]
    }
  },
  created() {},
  mounted() {
    window.document.addEventListener('scroll', this.handleScroll, true)
    window.addEventListener('resize', this.handleScroll, true)
    this.position = this.positionIncubator(this.$refs.textWrap)
  },
  beforeDestroy() {
    window.document.removeEventListener('scroll', this.handleScroll, true)
    window.removeEventListener('resize', this.handleScroll, true)
  },
  methods: {
    clickTextWrap() {
      this.isShow = !this.isShow
    },
    handleScroll(e) {
      if (!this.isShow) return

      const dom = e.target
      if (/select-container/g.test(dom.className)) {
        return
      }

      this.position = this.positionIncubator(this.$refs.textWrap)
    },
    positionIncubator(node) {
      if (!node) return null
      const rect = node.getBoundingClientRect()
      console.log('----------------')
      console.log(rect)

      const position = {}
      if (rect.left + containerWidth >= window.innerWidth) {
        position.right = 0
      } else {
        position.left = rect.left
      }
      if (rect.bottom + containerHeight >= window.innerHeight) {
        position.top = rect.bottom - containerHeight
      } else {
        position.top = rect.bottom
      }
      return position
    }
  }
}
</script>
