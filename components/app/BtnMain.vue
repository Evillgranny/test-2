<template lang="pug">
  button(:class="color" class="btn-main w-48") {{ title }}
</template>

<script>
export default {
  name: 'BtnMain',
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
