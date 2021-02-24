<template lang="pug">
.flex.flex-wrap.w-32.h-24
  div(v-for="item in 35" class="rounded-full bg-dot w-dot h-dot mr-13px mb-4 opacity-50")
</template>

<script>
export default {
  name: 'SquareDots',
}
</script>
