// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    head: {
        script: [
            // Google tag (gtag.js)
            {
              src: 'https://www.googletagmanager.com/gtag/js?id=G-64SVBE7HC5',
              async: true
            },
            {
              innerHTML: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-64SVBE7HC5');
              `
            }
          ]
    },
    target: 'static',
    css: [
        '@/assets/css/main.css',
        '@/assets/scss/main.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/abstracts/_variables.scss";',
                },
            },
        },
    },
    modules: ['@nuxtjs/apollo'],
    apollo: {
        clients: {
            default: {
                httpEndpoint: process.env.BACKEND_URL
            }
        },
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
