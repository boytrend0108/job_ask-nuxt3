
<template>
  <div class="container">
    <section class="offers">
      <HomeOffer 
        v-for="offer in offers" 
        :key="offer.id" 
        :offer="offer"
      />
    </section>
  </div>
</template>

<script setup>

const {data: offers} = useFetch('/api/home')

</script>

<style lang="scss" scoped>
  .offers {
     display: flex;
     flex-direction: column;
     gap: 30px;
  }
</style>