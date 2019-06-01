<template>
  <div>
    <div class="bili-date-picker-year-month">
      <bili-button color="primary" type="solid">
        <span
          class="iconfont icon-dixiaofei bili-date-picker-year-month-pre"
          @click="handleChangeToPre"
        ></span>
      </bili-button>
      <div class="bili-date-picker-year-month-select">
        <div class="bili-date-picker-year-month-year">
          <Select :values="years" :labels="years" :current="year" @on-change="changeYear"/>
        </div>
        <span class="bili-date-picker-year-month-v-line"></span>
        <div class="bili-date-picker-year-month-month">
          <Select
            :values="months"
            :labels="monthsLabels"
            :current="month"
            @on-change="changeMonth"
          />
        </div>
      </div>
      <bili-button color="primary" type="solid">
        <span
          class="iconfont icon-dixiaofei bili-date-picker-year-month-next"
          @click="handleChangeToNext"
        ></span>
      </bili-button>
    </div>
  </div>
</template>
 
<script>
import Select from './select.vue'
export default {
  name: 'YearMonth',
  components: { Select },
  // 年月组件，需要切换年月，点击出现可以滚动的div，选中或点击其他地方会关闭这个div
  props: {
    date: {
      type: [String, Date],
      default: ''
    },
    /** If the next date if before the previous one. */
    toPre: {
      type: Boolean,
      default: false
    },
    /** The start year.  */
    yearStart: {
      type: Number,
      default: 1970
    },
    /** The end year.  */
    yearEnd: {
      type: Number,
      default: 2200
    }
  },
  data() {
    return {
      year: this.date.getFullYear(),
      month: this.date.getMonth()
    }
  },
  computed: {},
  watch: {
    date: function(val, oldVal) {
      this.year = this.date.getFullYear()
      this.month = this.date.getMonth()
    }
  },
  created() {
    const { yearStart, yearEnd } = this
    const length = yearEnd - yearStart + 1
    this.years = new Array(length)
    for (let i = 0; i < length; i++) {
      this.years[i] = i + yearStart
    }
    this.months = new Array(12)
    this.monthsLabels = new Array(12)
    for (let i = 0; i < 12; i++) {
      this.months[i] = i
      this.monthsLabels[i] = `${i < 9 ? '0' : ''}${i + 1}`
    }
  },
  methods: {
    handleChangeToPre() {
      this.changeDate('setMonth', this.month - 1)
    },
    handleChangeToNext() {
      this.changeDate('setMonth', this.month + 1)
    },
    changeDate(method, value) {
      let oldDate = this.date

      const date = new Date(oldDate.getTime())
      date.setDate(1)
      date[method](value)
      this.$emit('handleChange', date)
    },
    changeYear(value) {
      this.year = value
    },
    changeMonth(value) {
      this.month = value
    }
  }
}
</script>