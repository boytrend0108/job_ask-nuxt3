<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__about">
          <h3 class="footer__title">О нас</h3>
          <p class="footer__text">
            Занимаемся оформлением виз в Европу,помогаем найти работу и сделать ВНЖ
          </p>
        </div>

        <div class="footer__nav">
          <h3 class="footer__title footer__title--search">Поиск</h3>
          <Menu direction="column" inFooter="true"/>
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

      <div class="footer__copy">
        <p class="footer__copyright">© copyright 2023 by 
          <NuxtLink to="/#top" class="footer__copylink">jobask.ru</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .footer {
    background-image: url(~/assets/images/home/footer-bg.webp);
    padding-top: $margin-section;
    position: relative;

    @include onMobile {
      padding-top: $margin-section-mobile;
    }

    &::before {
      @include decorLine;
    }

    &__top {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 60px;
      margin-bottom: 20px;

      @include onMobile {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: flex-start;
        margin-bottom: 30px;
      }
    }

    &__title {
      color: #fff;
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 40px;

      @include onMobile {
        margin-bottom: 20px;
      }

      &--search {
        margin-left: 20px;

        @include onMobile {
          margin-left: 0;
        }
      }
    }

    &__text {
      @include onMobile {
        margin-left: 20px;
      }
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

          @include onMobile {
            margin-left: 20px;
          }

          &::before {
            content: url(~/assets/images/icons/#{$icon}.svg);
          }

          &:hover::before {
            content: url(~/assets/images/icons/#{$icon}-hover.svg);
          }
        }
      }


    }

    &__copyright {
      font-family: "Barlow", serif;
      font-size: 16px;
      justify-content: center;
      display: flex;
      padding-block: 32px;
      box-sizing: border-box;
      position: relative;
      color: #a6b3d0;

      &::before {
        content: '';
        width: 100%;
        max-width: 1170px;
        height: 5px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &__copylink {
      color: #fff;
      margin-left: 10px;
    }
  }

</style>