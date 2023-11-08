<template>
  <div class="news">
    <div class="container">
      <article class="news__content">
        <h1 class="news__title"> {{ news.title }}</h1>

        <img 
          class="news__img"
          :src="`${news.image}`" 
          :alt="`${news.title}`"
          width="600"
          height="500"
        >
        
        <p class="news__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero nemo ipsum omnis, maiores doloribus ea inventore minus eius odit consequatur placeat possimus repudiandae optio fuga repellat reprehenderit quidem dolor commodi minima obcaecati! Provident voluptates incidunt debitis delectus modi corporis qui? Architecto minima odio ipsa ex itaque dolorum. Aspernatur, blanditiis in.
        </p>
      </article>
    </div>

  </div>
</template>

<script setup>
  const {news} = defineProps(['news'])
</script>

<style lang="scss" scoped>
  .news {
    &__title {
      margin-bottom: 40px;
    }

    &__img {
      margin-bottom: 40px;
      object-fit: contain;
    }
  }
</style>