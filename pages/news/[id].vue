<template>
  <div>
    <p class="error">Sorry, this page is under development</p>

    <Head>
      <Title>Новость дня</Title>
      <Meta name="description" :content="news.description"/>
    </Head>

    <NewsItem :news="news"/>
    
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script setup>
  import { API } from '~/constants/constants.js'
  const { id } = useRoute().params
  const uri = API +  `/${id}`

  const {data: news} = await useFetch(uri, {key: id})

  if (!news.value) {
    throw createError({
      statusCode: 404, 
      statusMessage: 'News not found',
      fatal: true,
    })
  }
</script>

<style lang="scss" scoped>
  @include pageTransition;
</style>