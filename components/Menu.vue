<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <NuxtLink to="/" class="nav__link">Главная</NuxtLink>
      </li>
      <li class="nav__item nav__item--vng">
        <NuxtLink to="/resident" class="nav__link">ВНЖ</NuxtLink>
        <div class="nav__dropdown">
          <NuxtLink to="/resident#slovakii" class="nav__drop-item">Словакия</NuxtLink>
          <NuxtLink to="/resident#ch" class="nav__drop-item">Чехия</NuxtLink>
        </div>
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
</template>

<script setup>
  const { direction } = defineProps(['direction'])
  const paddingBlock = direction === 'row' ? '40px': '5px'
  const linkColor = direction === 'row' ? '#0c1a3c': '#7c859b'
  const underlineColor = direction === 'row' ? '#0c1a3c': '#7c859b'
  const underlineTop = direction === 'row' ? '60px': '25px'
  const menuWidth = direction === 'row' ? '400px': 'fit-content'
</script>

<style lang="scss" scoped>
 .nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    &__list {
      display: flex;
      flex-direction: v-bind(direction);
      width: v-bind(menuWidth);
      justify-content: space-between;
    }

    &__item {
      width: fit-content;

      &--vng {
        position: relative;
        &:hover {
          .nav__dropdown {
            opacity: 1;
            pointer-events: all;
          }
        }
      }
    }

    &__link {
      --paddingInline: 20px;

      padding-block: v-bind(paddingBlock);
      padding-inline: var(--paddingInline);
      box-sizing: border-box;
      color: v-bind(linkColor);
      position: relative;
      width: fit-content;

      &::before {
        content: '';
        position: absolute;
        display: block;
        top: v-bind(underlineTop);
        left: var(--paddingInline);
        width: 0;
        height: 2px;
        background-color: v-bind(underlineColor);
        transition: all ease-in $transition-duration;
      }

      &:hover::before {
        width: calc(100% - var(--paddingInline) * 2);
      }
    }

    &__dropdown {
      opacity: 0;
      pointer-events: none;
      transition: opacity ease-in $transition-duration;
      position: absolute;
      top: 100px;
      left: 0;
      background-color: #0c1a3c;
      width: 150px;
    }

    &__drop-item {
      font-size: 15px;
      color: #fff;
      font-weight: 500;
      padding: 12px 30px;
      display: block;
      line-height: 26px;
      white-space: nowrap;
      position: relative;
      transition: all .4s ease;
      cursor: pointer;
      border: 1px solid #2f155f;

      @include hover(background-color, $color-active)
    }
  }

  .router-link-exact-active {
    color: $color-active;
  }
</style>