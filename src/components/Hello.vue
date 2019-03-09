<template>
  <p class="starter-hello">Hello, {{ name }}!</p>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    name: {
      type: String,
      required: !0,
      default: '',
    },
  },
};
</script>
