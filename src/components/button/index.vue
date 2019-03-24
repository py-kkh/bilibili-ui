<template>
  <div :class="btnClass">
    buttonf
  </div>
</template>
<script>
export default {
  name: "MyButton",
  computed: {
    btnClass() {
      return {
        loading: false,
        disabled: false
      };
    }
  },
  mounted() {},
};
</script>

