<template lang="pug">
  div.overflow-hidden
    div(class="container flex lg:pt-20 lg:px-6 relative flex-wrap lg:flex-nowrap")
      Square(class="hidden lg:block")
      Cross(class="hidden lg:block")
      SquareDots.absolute.top-6(class="hidden lg:flex")
      div(class="relative lg:pt-3")
        h1(class="text-white font-bold text-center lg:text-left text-2xl lg:text-main leading-1-2")
          | Тестовое задание <br>
          | для
          span.text-yellow  самого лучшего
          |  верстальщика

        div(class="flex mt-8 lg:mt-12 flex-wrap lg:flex-nowrap")
          div(class="lg:w-5/12 flex flex-wrap lg:block")
            h2(class="text-white pl-2 lg:pl-0 whitespace-nowrap text-2xl font-bold w-1/2 lg:w-auto self-center") Низкий оргвзнос

            AnimatePrice(class="ml-auto sm:ml-5 mr-5 lg:ml-2 lg:mt-5")

            div(class="lg:-mt-1 lg:-ml-1 w-full lg:w-auto")
              BtnMain(color="bg-yellow" title="Подать заявку на участие" class="block mx-auto lg:mx-0 mt-8 lg:mt-16 w-64 h-16 px-1 box-content")

          div(class="mt-12 lg:mt-0 lg:w-1/2 lg:flex flex-col justify-between")
            MainList(
              v-for="(list, index) in lists"
              :key="list.title"
              :title="list.title"
              :items="list.items"
              class="lg:ml-3 -mt-2 lg:mt-0 pl-1 lg:pl-3"
              :class="{ 'mb-6 lg:mb-0':  index === 0}"
              )

      div(class="lg:w-1/2")
        img(
          src="~assets/img/main-people.png"
          class="main-img"
          )
    img(src="~assets/img/triangle.svg" class="w-full relative lg:mt-5")

</template>

<script>
import Logo from '~/components/header/Logo'
import SquareDots from '~/components/decoration/SquareDots'
import AnimatePrice from '~/components/decoration/AnimatePrice'
import Btn from '~/components/app/Btn'
import BtnMain from '~/components/app/BtnMain'
import MainList from '~/components/app/MainList'
import Square from '~/components/decoration/Square'
import Cross from '~/components/decoration/Cross'

export default {
  name: 'Home',
  components: {
    Cross,
    Square,
    MainList,
    BtnMain,
    Btn,
    AnimatePrice,
    SquareDots,
    Logo,
  },
  data: () => ({
    lists: [
      {
        title: 'Ученикам',
        items: [
          'Конкурс по 16 предметам',
          'Доступные задания для всех учеников',
          'Бесплатные дипломы и сертификаты',
        ],
      },
      {
        title: 'Учителям',
        items: [
          'Бесплатные свидетельства',
          'Бесплатные благодарности',
          'Простое участие',
        ],
      },
    ],
  }),
}
</script>
