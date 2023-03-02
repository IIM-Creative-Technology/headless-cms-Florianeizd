// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi'],
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1331',
        prefix: '/api',
        version: 'v4',
      }
})
