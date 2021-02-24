<template lang="pug">
  ul.border-l-3.border-orange
    li.text-list-title.text-2xl.font-bold.mb-1.-mt-1 {{ title }}
    li(
      :class="{'mb-1.5': index !== items.length - 1}"
      class="text-white text-sm font-semibold"
      v-for="(item, index) in items" :key="item"
      ) {{ item }}

</template>

<script>
export default {
  name: 'MainList',
  props: {
    title: {
      type: String,
      default: '',
      required: '',
    },
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped></style>
