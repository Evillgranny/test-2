<template lang="pug">
.w-16.h-16.bg-orange.rounded-full.relative.flex.items-center
  h3(class="text-white font-bold text-4xl pl-3 flex") 30
    img(src="~assets/img/rouble.svg" alt="rouble" class="ml-1")
  div(class="absolute left-1/2 top-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2")
    div(class="absolute rounded-full border border-orange w-full h-full animate-price")
    div(class="absolute animation-delay-1000 rounded-full border border-orange w-full h-full animate-price")
    div(class="absolute animation-delay-2000 rounded-full border border-orange w-full h-full animate-price")
</template>

<script>
export default {
  name: 'AnimatePrice',
}
</script>
