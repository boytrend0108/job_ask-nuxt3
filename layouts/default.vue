<template>
  <div class="layout">
    <div class="layout__header" id="top">
      <div class="container">
        <TopBar @show-sidebar="showMenu = true" />
      </div>
    </div>

    <SideMenu 
      :showEl="showMenu" 
      :style="{left: showMenu ? '0' : '-200%'}" 
      @close-sidebar="showMenu = false"
    />

    <div class="layout__main">
      <slot />
    </div>

    <Footer />

    <UIUpButton  v-if="scrollButton"/>
  </div>
</template>

<script setup>
  const scrollButton = ref(true)
  const showMenu = ref(false)

  const showScrollButton = () => { 
    if (window.scrollY > 300) {
      scrollButton.value = true
    } else {
      return scrollButton.value = false
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', showScrollButton)
    watch(showMenu, () => {
      if(showMenu.value) {
        document.documentElement.style.overflow = 'hidden'
      } else {
        document.documentElement.style.overflow = 'auto'
      }
    })
  })
</script>

<style lang="scss" scoped>

  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    &__main {
      flex-grow: 1;
      position: relative;
    }
  }

</style>