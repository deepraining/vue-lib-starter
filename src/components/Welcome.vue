<template>
  <p class="starter-welcome">Welcome, {{ name }}!</p>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    name: {
      type: String,
      required: !0,
      default: '',
    },
  },
};
</script>
