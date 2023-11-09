<template>
  <section class="first-screen">
    <div class="container">
      <h1 class="first-screen__title">
        Работа это просто.<br>
        Европа Ждёт
      </h1>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
 .first-screen {
   height: 570px;
   background-image: url(~/assets/images/home/inner-banner-bg.webp);
   display: flex;
   justify-content: center;
   align-items: center;

    &__title {
      color: #fff;
      font-size: 80px;
      line-height: 90px;
      letter-spacing: -.02em;
      font-weight: 700;
    }
  }
</style>