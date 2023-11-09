<template>
  <div>
     <form class="form" ref="form" @submit.prevent="sendData">
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
      ></textarea>

      <UIWhiteButton>Отправить</UIWhiteButton>
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

</style>