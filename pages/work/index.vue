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
          <section class="work__form">
            <HomeForm />
          </section>
        </div>
      </main>
    </div>
</template>

<script setup>
  const {data: jobs} = useFetch('/api/work')
  console.log(jobs.value)

</script>

<style lang="scss" scoped>
  .work {
    &__header {
      padding-block: 120px;
      background-image: url(~/assets/images/home/inner-banner-bg.webp);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 120px;

      &::before {
        @include decorLine;
        top: 100px;
      }
    }

    &__title {
      color: #fff;
      margin-bottom: 10px;
      text-align: center;
      line-height: 1em;
      font-size: 60px;
      font-weight: 700;
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
    margin-bottom: 120px;
  }

  .router-link-exact-active {
    color: $color-active;
  }
</style>