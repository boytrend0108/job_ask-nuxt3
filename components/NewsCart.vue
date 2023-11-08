<template>
  <div class="news-cart">
    <NuxtLink :to="`/news/${item.id}`">
      <div class="news-cart__wr">
        <img
          class="news-cart__img"
          :alt="item.title"
          :src="item.image"
          width="240"
          height="200"
        >
      </div>
      <h3 class="news-cart__subtitle">Новость дня</h3>
      <h2 class="news-cart__title"> {{ item.title }}</h2>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { item } = defineProps(['item'])
</script>

<style lang="scss" scoped>
    .news-cart {
      display: flex;
      flex-direction: column;
      gap: 20px;
      cursor:pointer;

    &__wr {
      overflow: hidden;
      margin-bottom:20px;
    }
    
    &__img {
      width: 100%;
      object-fit: contain;

      @include hover(transform, scale($transform-scale));
    }

    &__subtitle {
      color: $color-active;
      font-size: 21px;
      margin-bottom: 20px;
    }

    &__title {
      color: $color-font-dark;
      font-size: 21px;
      line-height: 1.35;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
    }
  }
</style>