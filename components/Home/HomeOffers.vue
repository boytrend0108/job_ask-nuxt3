
<template>
  <div class="container">
    <section class="offers">
      <HomeOffer 
        v-for="offer in offers" 
        :key="offer.id" 
        :offer="offer"
        class="target"
      />
    </section>
  </div>
</template>

<script setup>
  const { data: offers } = await useFetch('/api/home')

  onMounted(() => {
    intesectionUtil(animation)

    function animation(target) {
      target.style.opacity = '1';
      target.style.transform = 'translateY(0)';
    }
  })
</script>

<style lang="scss" scoped>
  .offers {
     display: flex;
     flex-direction: column;
     gap: 60px;
  }
</style>