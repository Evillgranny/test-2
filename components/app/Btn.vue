<template lang="pug">
  button(:class="color" class="btn") {{ title }}
</template>

<script>
export default {
  name: 'Btn',
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
    color: {
      type: String,
      require: true,
      default: 'bg-white',
    },
  },
}
</script>

<style scoped></style>
