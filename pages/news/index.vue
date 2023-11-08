<template>
  <div>
    <div class="container">
      <div class="news-box">
        <article class="news-box__item" v-for="item in news">
          <NewsCart :item="item"/>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { API }from '~/constants/constants.js'
  const { data: news } = useFetch(API)
</script>

<style lang="scss" scoped>
   .news-box {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;
   }
</style>