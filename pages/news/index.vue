<template>
    <div class="container">
      <p v-if="error" class="error">Упсс... что-то пошло не так</p>

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

</style>