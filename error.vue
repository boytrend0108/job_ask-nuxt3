<template>
  <div class="container">
   <div class="error">
      <div class="error__content">
        <h1 class="error__title">{{ error.statusCode }}</h1>
        <h2 class="error__subtitle"> Ooops...</h2>
        <p class="error__text">{{ error.message }}</p>
        <UIMyButton @click="clickHandler">Go Home...</UIMyButton>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps(['error'])
  const clickHandler = () => clearError({redirect: '/'})
</script>

<style lang="scss" scoped>
  .error {
    height: 100vh;
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &__content {
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      -webkit-box-shadow: 0px 1px 70px -2px rgba(34, 60, 80, 0.2);
      -moz-box-shadow: 0px 1px 70px -2px rgba(34, 60, 80, 0.2);
      box-shadow: 0px 1px 70px -2px rgba(34, 60, 80, 0.2);
    }

    &__title {
      margin-bottom: 40px;
    }
    
    &__subtitle {
      margin-bottom: 12px;
    }

    &__text {
      margin-bottom: 20px;
    }
  }
</style>