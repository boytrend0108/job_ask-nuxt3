<template>
  <section class="first-screen">
    <div class="container">
      <h1 class="first-screen__title">
        Работа это просто.<br>
        Европа <span class="first-screen__typer"> {{ message }}</span>
      </h1>
    </div>
  </section>
</template>

<script setup>
  import typeMessage from '~/plugins/typed'

  const message = ref('')
  const words = ['Ждёт ', 'Hанимает ']

  typeMessage(words, message)
</script>

<style lang="scss" scoped>
 .first-screen {
   height: 570px;
   background-image: url(~/public/assets/images/home/inner-banner-bg.webp);
   display: flex;
   justify-content: center;
   align-items: center;

   @include onMobile {
    height: 470px;
   }

    &__title {
      color: #fff;
    }

    &__typer {
      display: inline-block;

      &::after {
        content: '';
        display: block;
        height: 4px;
        width: 100%;
        border-top: 1px solid #1f5ad2;
        border-bottom: 1px solid #1f5ad2;
    }
  }
}
</style>