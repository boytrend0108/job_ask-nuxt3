<template>
  <article class="job-offer">
    <div class="job-offer__img-wr">
      <img
        :src="job.img"
        alt="Работа на заводе"
        class="job-offer__img"
        width="200"
        height="200"
      >
    </div>

    <div class="job-offer__content">
      <div class="job-offer__wr">
        <div class="job-offer__country"> {{ job.country }}</div>
        <h3 class="job-offer__title">{{ job.job }}</h3>
      </div>
      <p> {{ job.text }}</p>
    </div>
  </article>
</template>

<script setup>
   const { job } = defineProps(['job']) 
</script>

<style lang="scss" scoped>
  .job-offer {
    display: grid;
    grid-template-columns: repeat(12, fr);
    column-gap: 20px;
    align-items: center;
    padding: 40px;
    box-sizing: border-box;
    box-shadow: 
     0px 6px 47px -6px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 6px 47px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 47px -6px rgba(0,0,0,0.75);

    @include onMobile {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      box-shadow: none;
      padding: 0;
    }

    &__content {
      grid-column: 6/12;
    }

    &__img-wr {
      overflow: hidden;
      grid-column: 1/5;
      height: 0;
      padding-bottom: 100%;
      border-radius: 10px;
    }

    &__img {
      object-fit: cover;
      @include hover(transform, scale($transform-scale))
    }

    &__title {
      color: #0c1a3c;
      font-size: 24px;
      font-weight: bold;
      display: flex;
      align-items: center;
    }

    &__country {
      font-size: 14px;
      background-color: #d41e44;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 58px;
      color: #fff;
      padding-left: 14px;
      padding-right: 14px;
      box-sizing: border-box;
      width: 140px;
      border-radius: 10px;

      @include onMobile {
        width: 100%;
      }
    }

    &__wr {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 20px;
    }

  }
</style>