
<template>
  <article class="country">
    <h2 class="country__title"> {{ country.title }}</h2>
    <p 
      class="country__text" 
      v-for="(p,i) in country.text"
      :key="i"
      >
        {{ p }}
     </p>
    <div class="country__img-wr">
      <picture>
        <source media="(max-width: 500px)" :srcset="country.img_mob">
        <source media="(max-width: 768px)" :srcset="country.img_tab">
        <img
          :src="country.img"
          alt="Словакия"
          width="800"
          height="600"
          class="country__img"
        >
      </picture>
    </div>
    <ul class="country__documents">Необходимые документы:
      <li class="country__document">Ксерокопия загранпаспорта.</li>
      <li class="country__document">Справка о несудимости.</li>
      <li class="country__document">Две фотографии 3,5 на 4,5.</li>
      <li class="country__document">Подтверждение наличия финансовых средств на банковском счету.</li>
    </ul>
    <p class="country__terms">Срок оформления: До 2х месяцев</p>
    <p class="country__terms">Стоимость: {{ country.price }} €</p>
  </article>
</template>

<script setup>
  const { country } = defineProps(['country'])
</script>

<style lang="scss" scoped>
  .country {
    border-bottom: 1px solid #ccc;
    padding-bottom: 40px;

    &:first-child {
      padding-top: 60px;
    }
    
    &__title {
      margin-bottom: 30px;
      margin-top: 30px;
    }

    &__text {
      margin-bottom: 20px;
    }

    &__img-wr {
      overflow: hidden;
      width: 100%;
      height: 600px;
      border-radius: 10px;
      margin-bottom: 40px;

      @include onLaptop {
        height: 400px;
      }
      @include onTablet {
        height: 300px;
      }
      @include onMobile {
        height: 250px;
      }
    }

    &__img {
      width: 100%;
      height: 100%;
      @include hover(transform , scale($transform-scale));
      object-fit: cover;
      object-position: center;
    }

    &__documents {
      font-size: 20px;
      margin-bottom: 20px;
    }

    &__document {
      font-size: 16px;
      padding-left: 30px;

      &::before {
        content: url(/assets/images/icons/menu-active-star.png);
        position: relative;
        left: -10px;
      }
    }
  }
</style>