<template>
  <div>
     <form class="form" ref="form" @submit.prevent="sendData">
      <h2 class="form__title">Записаться на бесплатную консультацию</h2>
      <p class="form__notes">Если у вас остались вопросы или вы желаете получить услугу - заполните форму ниже и наш менеджер свяжется с вами</p>
      <input 
        type="text" 
        class="form__input"
        name="name"
        placeholder="Ваше имя"
        v-model="name"
      >
      <input 
        type="email" 
        class="form__input"
        name="email"
        placeholder="Ваш email"
        v-model="email"
      >
      <input 
        type="tel" 
        class="form__input"
        name="phone"
        placeholder="Ваше телефон"
        v-model="phone"
      >
      <textarea 
        class="form__textarea"
        placeholder="Интересующая услуга или вопрос"
        v-model="message"
        rows="6"
      ></textarea>

      <UIWhiteButton class="form__btn">Отправить</UIWhiteButton>
     </form>
  </div>
</template>

<script setup>
  const name = ref('')
  const email = ref('')
  const phone = ref('')
  const message = ref('')
  const form = ref(null)
  

const sendData = ({target:form}) => {
  const formData = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  }
  console.log(formData)
  form.reset()
}

</script>

<style lang="scss" scoped>
  .form {
    margin: 0 auto;
    max-width: 650px;
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background: #e0e0e0;
    padding: 60px;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 4px 4px 8px 0 rgba(34,60,80,.2);

    @include onMobile {
      padding: 30px;
    }

    &__input, 
    &__textarea {
      font-family: inherit;
      font-size: inherit;
      height: 50px;
      width: 100%;
      border: none;
      border-radius: 5px;
      background: #f0f1f8;
      padding: 0 20px;
      box-sizing: border-box;

      &:focus {
        outline: 1px solid $color-active;
      }

      @include placeholder {
        color: #aaa;
        opacity: 1;
        transition: all ease-in $transition-duration;
      }
      
      &:focus {
        @include placeholder {
          opacity: 0;
          transform: translateX(-50px)
        }
      }
    }

    &__textarea {
      resize: none;
      margin-bottom: 40px;
      padding: 20px 20px;
      height: 100px;

      @include scrollBar;
    }

    &__btn {
      align-self: flex-start;

      @include onMobile {
        width: 100%;
      }
    }
  }
</style>