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
      padding-top: 60px;

      @include onMobile {
        padding-top: 20px;
      }
      
      &::before {
        @include decorLine;
        top: 90px;
        
        @include onMobile {
          top: 66px;
        }
      }

      &__country {
        margin-bottom: 60px;
      }
    }

</style>