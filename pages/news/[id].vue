<template>
  <div>
    <NewsItem :news="news"/>
  </div>
</template>

<script setup>
  import { API } from '~/constants/constants.js'
  const { id } = useRoute().params
  const uri = API +  `/${id}`

  const {data: news} = await useFetch(uri, {key: id})
</script>

<style lang="scss" scoped>
</style>