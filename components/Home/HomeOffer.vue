<template>
  <article class="offer">
    <div class="offer__description">
      <p class="offer__subtitle"> {{ offer.subtitle }}</p>

      <h2 class="offer__title">{{ offer.title }}</h2>

      <ul class="offer__list">
        <li 
          class="offer__item" 
          v-for="(item, i) in offer.list" 
          :key="i"> {{item}}
        </li>
      </ul>
    </div>

    <div class="offer__img-wr">
      <img 
        class="offer__img" 
        :src="`${offer.img}`" 
        alt="Шенген виза" 
        width="380" 
        height="215"
      >
    </div>

    <div class="offer__contact">
      <h3 class="offer__subtitle-contact">
        <ClientOnly>
          <font-awesome-icon :icon="['far', 'address-card']" class="offer__icon" />
        </ClientOnly>
        {{ offer.title_2 }}
      </h3>

      <p class="offer__text">Именно поэтому собрали всю информацию косательно виз в одном месте</p>

     <NuxtLink to="/contact">
       <UIWhiteButton class="offer__btn">Узнать больше</UIWhiteButton>
     </NuxtLink>
    </div>
  </article>
</template>

<script setup>
   const { offer } = defineProps(['offer'])
</script>

<style lang="scss" scoped>
  .offer {
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    box-shadow: 
     0px 6px 47px -6px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 6px 47px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 47px -6px rgba(0,0,0,0.75);
    opacity: 0;
    transform: translateY(50px);
    transition: all ease-in 0.5s;

    @include onLaptop {
      grid-template-columns: repeat(2, 1fr);
    }

    @include onTablet {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    @include onMobile {
      box-shadow: none;
      padding: 0;
    }

    &__description {
      @include onLaptop {
        grid-column: 1/-1;
        margin-bottom: 20px;
      }
    }

    &__title {
      color: $color-font-dark;
      margin-bottom: 40px;
      width: 80%;
      
      @include onTablet {
        margin-bottom: 25px;
      }
    }

    &__item {
      color: $color-font-light;
      font-size: 18px;
      font-weight: 500;
      padding-left: 20px;
      margin-bottom: 10px;
      position: relative;

      &::before {
        content: url(/assets/images/icons/menu-active-star.png);
        display: block;
        position: absolute;
        top: 3px;
        left: 0;
        
      }
    }

    &__subtitle {
      color: $color-active;
      font-size: 20px;
      font-weight: 500;
      line-height: 1em;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    &__subtitle-contact {
      color: #fff;
      font-weight: bold;
      font-size: 26px;
      letter-spacing: -.02em;
      line-height: 1em;
      margin-left: 10px;
      margin-bottom: 23px;

      display: flex;
      gap: 10px;
      justify-content: space-between;
      align-items: center;

      @include onTablet {
        justify-content: start;
        gap: 20px;
      }
    }

    &__text {
      color: #fff;
      font-size: 18px;
      line-height: 34px;
      font-weight: 500;
      margin-bottom: 40px;
    }
   
    &__contact {
      background-color: $color-active;
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @include onTablet {
        padding: 20px;
      }
    }

    &__btn {
      background-color: #fff;
      width: fit-content;
    }

    &__icon {
      color: #fff;
      width: 60px;
      height: 60px;
    }

    &__img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }


</style>