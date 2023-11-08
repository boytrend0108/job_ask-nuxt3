<template>
  <div>
    <Head>
      <Title>Новость дня</Title>
      <Meta name="description" :content="news.description"/>
      <NewsItem :news="news"/>
    </Head>
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
</style>