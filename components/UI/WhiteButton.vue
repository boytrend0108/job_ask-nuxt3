<template>
  <div >
     <button class="btn">
        <slot />
     </button>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
   .btn {
      border: none;
      background-color: #fff;
      color: $color-font-dark;
      height: 40px;
      width: max-content;
      font-size: 16px;
      font-weight: 600;
      padding: 5px 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
   }

</style>