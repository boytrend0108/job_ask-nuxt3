<template>
  <div>
    <div class="home">
      <div class="home__header header">
        <div class="container">
          <div class="top-bar home__top-bar">
            <NuxtLink to="/">
              <img
                class="logo header__logo"
                src="~/assets/images/logo-ja-dark.webp"
                alt="logo"
                width="60"
                height="30"
              >
            </NuxtLink>
            <nav class="nav top-bar__nav">
              <ul class="nav__list">
                <li class="nav__item">
                  <NuxtLink to="/" class="nav__link">Главная</NuxtLink>
                </li>
                <li class="nav__item">
                  <NuxtLink to="/resident" class="nav__link">ВНЖ</NuxtLink>
                </li>
                <li class="nav__item">
                  <NuxtLink to="/work" class="nav__link">Работа</NuxtLink>
                </li>
                <li class="nav__item">
                  <NuxtLink to="/contact" class="nav__link">Контакты</NuxtLink>
                </li>
                <li class="nav__item">
                  <NuxtLink to="/news" class="nav__link">Hовости</NuxtLink>
                </li>
              </ul>
            </nav>
            <div class="top-bar__right">
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
        </div>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .header {
    &__logo {
      margin-bottom: 8px;
      cursor: pointer;
    }
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__right {
      display: flex;
      gap: 20px;
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
  }

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;

    &__list {
      display: flex;
      width: 400px;
      justify-content: space-between;
    }

    &__link {
      padding-block: 40px;
      color: $color-font-dark;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        display: block;
        top: 60px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: $color-font-dark;
        transition: all ease-in $transition-duration;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }

  .router-link-exact-active {
    color: $color-active;
  }

</style>