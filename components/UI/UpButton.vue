<template>
  <a 
    href="#top" 
    class="goUp"
    aria-label="Наверж"
  ></a>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .goUp {
    display: inline-block;
    width: 45px;
    height: 45px;
    background-color: #1f5ad2;
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 99;
    text-align: center;
    transition: all .4s ease;
    // display: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @include hover (background-color, #0c1a3c);

    &::after {
      content: url(~/assets/images/icons/arrow-up.svg);
      padding-top: 4px;
    }
  }

</style>