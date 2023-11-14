<template>
  <div class="contact">
    <header class="contact__header">
      <div class="container">
        <h1 class="contact__title">Работа</h1>
      </div>
    </header>
    <main class="contact__main">
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
      <HomeForm class="contact__form" />
    </main>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .contact {
    &__header {
      padding-block: 120px;
      background-image: url(~/public/assets/images/home/inner-banner-bg.webp);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: $margin-section;

      @include onMobile {
        margin-bottom: 0;
      }

      &::before {
        @include decorLine;
        top: 0;

        @include onMobile {
          top: 10px;
        }
      }
    }

    &__title {
      color: #fff;
      text-align: center;
      margin-bottom: 40px;

      @include onMobile {
        margin-bottom: 0;
      }
    }

    &__main {
      position: relative;
    }

    &__links {
      $width: clamp(490px, 50%, 700px);
      background-color: $color-active;
      display: flex;
      gap: 15px;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      box-sizing: border-box;
      width: $width;
      margin: 0 auto;
      position: absolute;
      top: -210px;
      left: calc(50% - ($width / 2));

      @include onMobile {
        position: static;
        flex-direction: column;
        width: 100%;
        gap: 0;
        margin-bottom: $margin-section-mobile;
      }
    }

    &__link {
      color: #fff;
      font-size: inherit;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      min-width: 100px;
      width: 100%;
      
      &:nth-child(-n + 2) {
        border-right: 3px solid #cccccc73;
        
        @include onMobile {
          border-right: none;
          border-bottom: 3px solid #cccccc73;
        }
      }

      &::before {
        display: block;
        position: relative;
        left: -10px;
      }

      $icons: 'whatsApp', 'email', "telegram";

      @each $icon in $icons {
        &--#{$icon} {

          &::before {
            content: url(~/public/assets/images/icons/#{$icon}-hover.svg);
          }

          &:hover::before {
            content: url(~/public/assets/images/icons/#{$icon}-hover.svg);
          }
        }
      }
    }

    &__form {
      margin-bottom: $margin-section;

      @include onMobile {
        margin-bottom: $margin-section-mobile;
      }
    }

  }

  @include pageTransition;

</style>