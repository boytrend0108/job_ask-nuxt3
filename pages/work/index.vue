<template>
    <div class="work">
      <header class="work__header">
        <div class="container">
          <h1 class="work__title">Работа</h1>
          <div class="work__nav">
            <NuxtLink to="/" class="work__link">Главная</NuxtLink>
            <NuxtLink to="/work" class="work__link">Работа</NuxtLink>
          </div>
        </div>
      </header>
      <main>
        <div class="container">
          <section class="jobs">
            <WorkJobOffer 
              v-for="job in jobs" 
              :key="job.id"
              :job="job"
            />
          </section>
        </div>

        <section class="work__form">
          <HomeForm />
        </section>
      </main>
    </div>
</template>

<script setup>
  const {data: jobs} = useFetch('/api/work')
</script>

<style lang="scss" scoped>
  .work {
    &__header {
      padding-block: 120px;
      background-image: url(~/public/assets/images/home/inner-banner-bg.webp);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: $margin-section;

      @include onMobile {
        margin-bottom: $margin-section-mobile;
      }

      &::before {
        @include decorLine;
        top: 0;
      }
    }

    &__title {
      color: #fff;
      margin-bottom: 10px;
      text-align: center;
    }

    &__nav {
      display: flex;
      justify-content: center;
      gap: 20px;
    }

    &__link {
      color: #fff;

      &:nth-child(n + 2)::before {
        content: '.';
        color: #fff;
        position: relative;
        top: -4px;
        right: 6px;
      }
    }

    &__form {
      margin-bottom: 120px;
    }
  }

  .jobs {
    display: flex;
    flex-direction: column;
    gap: 80px; 
    margin-bottom: $margin-section;
  }

  .router-link-exact-active {
    color: $color-active;
  }

  @include pageTransition;
</style>