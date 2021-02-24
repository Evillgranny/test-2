<template lang="pug">
header(class="container flex items-center justify-between lg:px-5 flex-wrap xl:flex-nowrap")
    Logo(class="xl:order-none")

    ul(class="mt-1 flex text-center text-white font-bold justify-center order-3 xl:order-none w-full xl:w-auto mt-7 xl:mt-0 flex-wrap lg:flex-nowrap")
      HeaderItem(
          v-for="item in items"
          :title="item.title"
          :text="item.text"
          :key="item.title"
          class="lg:px-8 w-1/2 lg:w-auto mb-6 lg:mb-0"
        )

    Btn(
      class="-mt-2 xl:order-none"
      title="Вход в кабинет"
      color="bg-white"
    )
</template>

<script>
import Logo from '~/components/header/Logo'
import HeaderItem from '~/components/header/HeaderItem'
import Btn from '~/components/app/Btn'
export default {
  name: 'Header',
  components: { Btn, HeaderItem, Logo },
  data: () => ({
    items: [
      {
        title: 'Прием заявок',
        text:
          'до <span class="text-base text-yellow font-bold leading-1">11</span> марта',
      },
      {
        title: 'Получение заданий',
        text:
          '<span class="text-base text-yellow font-bold leading-1">4</span> марта',
      },
      {
        title: 'Внесение ответов',
        text:
          'до <span class="text-base text-yellow font-bold leading-1">18</span> марта',
      },
      {
        title: 'Итоги конкурса',
        text:
          '<span class="text-base text-yellow font-bold leading-1">19</span> марта',
      },
    ],
  }),
}
</script>

<style scoped></style>
