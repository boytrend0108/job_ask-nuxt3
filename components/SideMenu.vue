<template>
  <aside class="side-menu">
    <div class="icon icon--close" @click="closeMenu"></div>
    <ul class="side-menu__list" @click="closeMenu">
      <li class="side-menu__item">
        <NuxtLink to="/" class="side-menu__link">Главная</NuxtLink>
      </li>
      <li 
        class="side-menu__item" 
      >
        <NuxtLink 
          to="/resident" 
          class="side-menu__link side-menu__link--vng" 
          id="vng"
          @click.self="showContries = !showContries"
        >
          ВНЖ
        </NuxtLink>
        <ul class="side-menu__countries"  v-if="showContries">
          <li>
            <NuxtLink to="/resident#slovakii" class="side-menu__country">Словакия</NuxtLink>
          </li>
          <li class="side-menu__country">
            <NuxtLink to="/resident#ch" class="side-menu__country">Чехия</NuxtLink>
          </li>
        </ul>
      </li>
      <li class="side-menu__item">
        <NuxtLink to="/work" class="side-menu__link">Работа</NuxtLink>
      </li>
      <li class="side-menu__item">
        <NuxtLink to="/contact" class="side-menu__link">Контакты</NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
  const emit = defineEmits(['close-sidebar'])
  const closeMenu = ({ target }) => {
    if (target.id === 'vng') return
    emit('close-sidebar')
    showContries.value = false
  }

  const showContries = ref(false)
  let arrowDirection = ref('rotate(90deg)')
  watch(showContries, () => {
    arrowDirection.value =  showContries.value ? 'rotate(180deg)' : 'rotate(90deg)'
  })

</script>

<style lang="scss" scoped>

.side-menu {
  width: 300px;
  height: 100vh;
  padding: 40px;
  box-sizing: border-box;
  background-color: #1a222e;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  transition: left ease-in-out $transition-duration;

  @include onMobile {
    width: 100%;
  }

  &__list {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    display: flex;
    flex-direction: column;
  }

  &__link {
    color: #fff;
    padding: 20px;

    &--vng {
      position: relative;

      &::after {
        content: url(../assets/images/icons/arrow-up.svg);
        transform: v-bind(arrowDirection);
        transition: transform ease-in $transition-duration;
        display: block;
        position: absolute;
        top: 20px;
        left: 70px;
      }
    }
  }

  &__countries {
    margin-left: 40px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    animation: slidedown ease-in $transition-duration;

    @keyframes slidedown {
      from {
        transform: translateY(-30px);
        opacity: 0;
      }

      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  &__country {
    color:#fff;
  }
}

.icon {
  &--close {
    background-image: url(../assets/images/icons/icon-close.svg);
    align-self: flex-end;

    @include hover(transform, rotate(-45deg))
  }
}

</style>