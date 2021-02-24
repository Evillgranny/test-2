<template lang="pug">
  li(class="-mt-1 flex flex-col items-center lg:block")
    p.text-sm.leading-none {{ title }}
    p(v-html="text").text-header-item.text-sm.font-normal.leading-none
</template>

<script>
export default {
  name: 'HeaderItem',
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
    text: {
      type: String,
      required: true,
      default: '',
    },
  },
}
</script>
