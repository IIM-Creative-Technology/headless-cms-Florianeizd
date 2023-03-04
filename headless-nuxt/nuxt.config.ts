import { link } from "fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/strapi'],
    
    strapi: {
        url: process.env.STRAPI_URL || 'http://localhost:1331',
        prefix: '/api',
        version: 'v4',
    },
    app: {
      head: {
        meta: [
          // <meta name="viewport" content="width=device-width, initial-scale=1">
      
        ],
        script: [
          // <script src="https://myawesome-lib.js"></script>
         
        ],
        link: [
          // <link rel="stylesheet" href="https://myawesome-lib.css">
          
        ],
    
        
      }, 
    }
})



