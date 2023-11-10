<template>
  <div class="container">
    <section class="resident">
      <h1 class="visually-hidden">Bид на жительство в странах Чехии и Словакии</h1>
      <ResidentContry 
        v-for="country in countries"
        :key="country.id"
        :id="country.id"
        :country="country"
        class="resident__country" 
      />
    </section>
  </div>
</template>

<script setup>
  const { data: countries } = useFetch('/api/resident')
</script>

<style lang="scss" scoped>
    .resident {
      
      &::before {
        content: '';
        width: 100%;
        height: 10px;
        background-image: url(~/assets/images/decor-lines.png);
        background-repeat: repeat-x;
        background-position: top left;
        position: absolute;
        top: 90px;
        left: 0;
        animation: bgSlide 20s linear infinite;

        @keyframes bgSlide {
          0% { 
            background-position: 0 0;
          }
          20% {
            background-position: -100px 0;
          }
          40% {
            background-position: -200px 0;
          }
          60% {
            background-position: -150px 0;
          }
          80% {
            background-position: -100px 0;
          }
          100% {
            background-position: 0px 0;
          }
        }
        }
      &__country {
        margin-bottom: 60px;
      }
    }

</style>