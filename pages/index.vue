<template>
  <div class="home">
    <HomeFirstScreen class="home__first-screen" />
    <HomeOffers class="home__offers"/>
    <section class="home__form">
      <HomeForm />
    </section>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .home {
    &__first-screen,
    &__offers,
    &__form {
      margin-bottom: 120px;
    }
  }

</style>
