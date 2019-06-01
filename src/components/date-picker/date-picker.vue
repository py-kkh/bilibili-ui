<template>
  <div class="bili-date-picker-wrapper">
    <div ref="textWrap" class="text-wrap" @click="clickTextWrap">点我开关日历</div>
    <transition name="fade">
      <div v-if="isShow" :class="classes" :style="styles">
        显示选中的年月日，等
        <br>
        <YearMonth
          :date="innerDate"
          :year-start="yearStart"
          :year-end="yearEnd"
          @handleChange="handleChangeDate"
        ></YearMonth>

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
import {
  arrayWith7Strings,
  arrayWith12Strings,
  dateOrStringOrNull,
  normalizeDate,
  dateToString,
  nop
} from './utils'
import YearMonth from './year-month.vue'

const prefixCls = 'bili-date-picker'

const containerWidth = 340
const containerHeight = 400

export default {
  name: 'BiliDatePicker',
  components: {
    YearMonth
  },
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
      isShow: true,
      dateV: normalizeDate(this.date),
      innerDate: normalizeDate(this.date) || normalizeDate(new Date())
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
    handleChangeDate(d, ok = false) {
      if (ok) {
        // this.handleConfirm(d);
      } else {
        console.log('--------d--------')
        console.log(d)
        console.log(normalizeDate(d))

        this.innerDate = normalizeDate(d)
      }
    },
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
