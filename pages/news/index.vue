<template>
    <div class="container">
      <p v-if="error" class="error">Упсс... что-то пошло не так</p>
      <p class="error">Sorry, this page is under development</p>

      <div class="preloader" v-if="pending">
        <UIPreloader class="preloader__item"/>
      </div>

      <div class="news-box" v-else>
        <article class="news-box__item" v-for="item in news">
          <NewsCart :item="item"/>
        </article>
      </div>
    </div>
</template>

<script setup>
  import { API } from '~/constants/constants.js'
  const showPreloader = ref(true)

  const { error , pending, data: news } =  await useFetch(API)
  showPreloader.value = false

  useHead({
    title: "Свежие новости",
    meta: [
      {name: 'description', content: 'Наши новости'}
    ]
  })
</script>

<style lang="scss" scoped>
   .news-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;
    margin-bottom: $margin-section;
    padding-top: $margin-section;

    @include onLaptop {
      grid-template-columns: repeat(3, 1fr);
    }
    @include onTablet {
      grid-template-columns: repeat(2, 1fr);
    }
    @include onMobile {
      grid-template-columns: repeat(1, 1fr);
      margin-bottom: $margin-section-mobile;
      padding-top: $margin-section-mobile;
    }
  }
  
  .container {
    height: 100%;
  }
  
  .preloader {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 84%;
  }

  @include pageTransition;

</style>