<template>
  <div :class="btnClass">buttonf</div>
</template>
<script>
export default {
  name: 'BiliButton',
  computed: {
    btnClass() {
      return {
        loading: false,
        disabled: false
      }
    }
  },
  mounted() {}
}
</script>
