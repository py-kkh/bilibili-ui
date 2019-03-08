<template>
  <div :class="btnClass">
    button
  </div>
</template>
<script>
export default {
  name: 'Button',
  computed: {
    btnClass() {
      return {
        loading: false,
        disabled: false
      }
    }
  }
}
</script>

