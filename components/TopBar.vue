<template>
  <div class="top-bar">
    <div class="top-bar__right">
      <NuxtLink to="/">
        <img
          class="logo header__logo"
          src="../public/assets/images/logo-ja-dark.webp"
          alt="logo"
          width="60"
          height="30"
        >
      </NuxtLink>
      <button 
        class="top-bar__burger" 
        v-if="!showTopMenu"
        @click="showMenu"
      ></button>
    </div>

    <Menu 
      direction="row" 
      v-if="showTopMenu"
    />

    <div class="top-bar__right" v-if="showRightBlock">
      <a
        href="https://telegram.com"
        class="top-bar__link top-bar__link--telegram fa fa-send"
        target="_blank"
      >
        <ClientOnly>
          <font-awesome-icon :icon="['fas', 'paper-plane']" />
        </ClientOnly>
      </a>
      <a
        href="mailto:example@gmail.com"
        class="top-bar__link top-bar__link--email"
        target="_blank"
      >
        <ClientOnly>
          <font-awesome-icon :icon="['fas', 'share']"/>
        </ClientOnly>
      </a>
    </div>
  </div>
</template>

<script setup>
  const showTopMenu = ref(false)
  const showRightBlock = ref(true)
  const emit = defineEmits(['show-sidebar'])
  
  onMounted(() => {
    showElements()

    window.addEventListener('resize', () => {
      if (!showTopMenu) return
      showElements()
    })
  })

  const showElements  = () => {
    showRightBlock.value = window.innerWidth > 500 ? true : false
    showTopMenu.value = window.innerWidth > 768 ? true : false
  }

  const showMenu = async () => {
    emit('show-sidebar')
  }

</script>

<style lang="scss" scoped>
 .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 100px;

    &__right {
      display: flex;
      justify-content: center;
      align-items: center;
      

      @include onMobile {
        width: 100%;
        justify-content: space-between;
      }
    }

    &__link {
      width: 40px;
      height: 40px;
      border: 1px solid #e8ebf2;
      line-height: 39px;
      text-align: center;
      font-size: 12px;
      color: #7c859b;
      transition: all .4s ease;
      transition: all ease-in $transition-duration;

      &:hover {
        background-color: $color-active;
        color: white;
      }
    }

    &__burger {
      width: 40px;
      height: 40px;
      padding: 50px;
      border: none;
      background-color: transparent;
      background-image: url(~/public/assets/images/icons/icon-burger-menu.svg);
      background-repeat: no-repeat;
      background-position: center;
      
      @include hover(background-image, url(~/public/assets/images/icons/icon-burger-menu-hover.svg));

      @include onMobile {
        padding: 30px;
        padding-right: 0;
      }
    }
  }

</style>