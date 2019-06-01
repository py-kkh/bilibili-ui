<template>
  <div>
    <div
      v-if="open"
      ref="refContainer"
      class="bili-date-picker-select bili-date-picker-select-open"
    >
      <div v-for="(value, index) in values" :key="index">
        <div
          ref="refCurrent"
          :key="index"
          :class="[
            'bili-date-picker-select-option',
            value === current ? 'bili-date-picker-select-option-current' : ''
          ]"
          @click="handleSelect(value)"
        >{{ labels[index] }}</div>
      </div>
    </div>
    <div v-else class="bili-date-picker-select bili-date-picker-select-close">
      <div
        class="bili-date-picker-select-option"
        @click="handleSwitchOpen"
      >{{ labels[values.indexOf(current)] }}</div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    values: {
      type: Array,
      default: () => []
    },
    labels: {
      type: Array,
      default: () => []
    },
    current: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      open: false
    }
  },
  computed: {},
  methods: {
    handleSelect(value) {
      this.open = false
      this.$emit('on-change', value)
    },
    handleSwitchOpen() {
      this.open = !this.open
    }
  }
}
</script>