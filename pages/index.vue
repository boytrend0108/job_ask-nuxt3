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
      margin-bottom: $margin-section;

      @include onMobile {
        margin-bottom: $margin-section-mobile;
      }
    }
  }

  .page-enter-active,
    .page-leave-active {
      transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
      opacity: 0;
      filter: blur(1rem);
    }

</style>
