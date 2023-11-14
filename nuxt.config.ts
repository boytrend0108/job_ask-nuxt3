// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },  
  app: {
    head: {
      title: 'JobAsk',
      meta: [
        { name: 'desctiption', content: 'Визы в Европу' },

      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap'},
      ]
    },

    pageTransition: { name: 'page', mode: 'out-in' }

  },

  css: [
    '~/assets/styles/main.scss',
    '~/assets/styles/_normalize.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/utils/_utils.scss" as *;'
        }
      }
    }
  }, 

})
