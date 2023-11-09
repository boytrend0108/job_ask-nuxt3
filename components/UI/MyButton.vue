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
      background-color: teal;
      color: white;
      height: 40px;
      font-size: 20px;
      padding: 20px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
   }

</style>