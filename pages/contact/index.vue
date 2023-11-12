<template>
  <div class="contact">
    <header class="contact__header">
      <div class="container">
        <h1 class="contact__title">Работа</h1>

        <div class="contact__links">
          <a 
            href="https://web.whatsapp.com/" 
            aria-label="Whats App"
            class="contact__link contact__link--whatsApp"
            target="_blank"
          >
            Whats App
          </a>

          <a 
            href="mailto:example@mail.com" 
            aria-label="Email"
            class="contact__link contact__link--email"
            target="_blank"
          >
            Email
          </a>
          
          <a 
            href="https://https://web.telegram.org" 
            aria-label="Telegram"
            class="contact__link contact__link--telegram"
            target="_blank"
          >
            Telegram
          </a>
        </div>
      </div>
    </header>
    <main>
      <HomeForm class="contact__form" />
    </main>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .contact {
    &__header {
      padding-top: 120px;
      background-image: url(~/assets/images/home/inner-banner-bg.webp);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 120px;

      &::before {
        @include decorLine;
        top: 100px;
      }
    }

    &__title {
      color: #fff;
      text-align: center;
      margin-bottom: 40px;
    }

    &__links {
      background-color: $color-active;
      display: flex;
      gap: 20px;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      width: 50%;
      margin: 0 auto;
    }

    &__link {
      color: #fff;
      font-size: inherit;
      position: relative;
      display: block;
      padding: 20px;
      min-width: 100px;

      &:nth-child(-n + 2) {
        border-right: 3px solid #cccccc73;
        border-right-width: 70%;
      }

      &::before {
        display: block;
        position: absolute;
        left: 0px;
      }

    

      $icons: 'whatsApp', 'email', "telegram";

      @each $icon in $icons {
        &--#{$icon} {

          &::before {
            content: url(~/assets/images/icons/#{$icon}-hover.svg);
          }

          &:hover::before {
            content: url(~/assets/images/icons/#{$icon}-hover.svg);
          }
        }
      }
    }

    &__form {
      margin-bottom: 120px;
    }

  }

</style>