<template>
  <div></div>
</template>
 
<script>
export default {
  // 年月组件，需要切换年月，点击出现可以滚动的div，选中或点击其他地方会关闭这个div
  props: {
    date: {
      type: String,
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
    return {}
  },
  computed: {},
  methods: {}
}
</script>