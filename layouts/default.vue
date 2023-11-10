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
            <Menu direction="row"/>
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

    <footer class="footer">
      <div class="container">
        <div class="footer__top">
           <div class="footer__about">
            <h3 class="footer__title">О нас</h3>
            <p class="fotter__text">
              Занимаемся оформлением виз в Европу,помогаем найти работу и сделать ВНЖ
            </p>
           </div>
           <div class="footer__nav">
            <h3 class="footer__title">Поиск</h3>
            <Menu direction="column"/>
           </div>
           <div class="footer__contacts">
            <h3 class="footer__title">Контакты</h3>
            <a 
              href="https://web.whatsapp.com/" 
              aria-label="Whats App"
              class="footer__link footer__link--whatsApp"
              target="_blank"
            >
             Whats App
            </a>
            <a 
              href="mailto:example@mail.com" 
              aria-label="Email"
              class="footer__link footer__link--email"
              target="_blank"
            >
             Email
            </a>
            <a 
              href="https://https://web.telegram.org" 
              aria-label="Telegram"
              class="footer__link footer__link--telegram"
              target="_blank"
            >
             Telegram
            </a>
           </div>
        </div>
        <div class="footer__copy"></div>
      </div>
    </footer>
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

  .footer {
    background-image: url(~/assets/images/home/footer-bg.webp);
    padding-top: 220px;
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 10px;
      background-image: url(~/assets/images/decor-lines.png);
      background-repeat: repeat-x;
      background-position: top left;
      position: absolute;
      top: 0;
      left: 0;
      animation: bgSlide 20s linear infinite;

      @keyframes bgSlide {
        0% { 
          background-position: 0 0;
        }
        20% {
          background-position: -100px 0;
        }
        40% {
          background-position: -200px 0;
        }
        60% {
          background-position: -150px 0;
        }
        80% {
          background-position: -100px 0;
        }
        100% {
          background-position: 0px 0;
        }
      }
    }

    &__top {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 60px;
    }

    &__title {
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 40px;
    }

    &__contacts {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    &__link {
      color: inherit;
      font-size: inherit;
      padding-left: 30px;
      position: relative;

      &::before {
        display: block;
        position: absolute;
        left: 0px;
      }

      $icons: 'whatsApp', 'email', "telegram";

      @each $icon in $icons {
        &--#{$icon} {

          &::before {
            content: url(../assets/icons/#{$icon}.svg);
          }

          &:hover::before {
            content: url(../assets/icons/#{$icon}-hover.svg);
          }
        }
      }
    }
  }

</style>