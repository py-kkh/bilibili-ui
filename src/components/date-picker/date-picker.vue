<template>
  <div></div>
</template>
<script>
import { oneOf, getColor } from '../../utils/helper'
const prefixCls = 'bili-date-picker'
export default {
  name: 'BiliDatePicker',
  /**
   * func
   * onChange
   * onCancel
   * format
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
      type: number,
      default: 1917
    },
    yearEnd: {
      type: number,
      default: 2200
    },
    format: {
      type: Function,
      default: v => v
    }
  },
  data() {
    return {}
  },
  computed: {
    // 透传事件
    listeners() {
      return {
        ...this.$listeners,
        click: event => this.clickButton(event)
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
    }
  },
  mounted() {},
  methods: {}
}
</script>
