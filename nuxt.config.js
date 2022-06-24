

export default {
  target: 'static',
  server: {
    port: 8000
  },
  head: {
    title: 'AlternateCMS',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'},
      {rel: 'stylesheet', href: '/mdb/plugins/css/all.min.css'},
      {rel: 'stylesheet', href: '/mdb/css/mdb.min.css' },
    ],
    script: [
      { src: '/mdb/plugins/js/all.min.js', mode: 'client'},
      { src: '/mdb/js/mdb.min.js', mode: 'client'},
      { src: 'https://editor.unlayer.com/embed.js', ssr: false },
    ]
  },

  css: [
    '~/static/styles/styles.css',
    'simplemde/dist/simplemde.min.css',
  ],

  script: [
  ],

  plugins: [
    { src: '~/plugins/extensions/simplemde.js', ssr: false },
    { src: '~/plugins/main.js', ssr: false },
    { src: '~/plugins/apollo-error-handler.js', ssr: false },
    { src: '~/plugins/ecommerce/pa-dss.js', ssr: false },
    { src: '~/plugins/client.js', ssr: false },
    // { src: '~/plugins/extensions/email.js', ssr: false },
    { src: '~/plugins/upload.js', ssr: false },
  ],

  components: true,

  buildModules: [
    '@nuxtjs/moment',
    '@braid/vue-formulate/nuxt',
    'nuxt-webpack-optimisations',
    '@nuxtjs/composition-api/module',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sentry',
    '@nuxtjs/apollo',
    '@nuxt/http',
    '@nuxtjs/i18n',
    // '@nuxtjs/recaptcha',
    '@nuxt/image',
    'nuxt-client-init-module',
    'nuxtjs-darkmode-js-module',
    '@nuxtjs/firebase',
    'nuxt-stripe-module',
    '@nuxtjs/lunr-module',
    'nuxt-highcharts',
  ],

// Modules Options -----------------------------------------------------------------------------------------------

stripe: {
  publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
},

firebase: {
  config: {
    apiKey: '<apiKey>',
    authDomain: '<authDomain>',
    projectId: '<projectId>',
    storageBucket: '<storageBucket>',
    messagingSenderId: '<messagingSenderId>',
    appId: '<appId>',
    measurementId: '<measurementId>'
  },
  services: {
    auth: true,
    firestore: true,
    functions: true,
    storage: true,
    database: true,
    messaging: true,
    performance: true,
    analytics: true,
    remoteConfig: true
  }
},

highcharts: {
  /* module options */
},

netlify: { 
  headers: {
    '/*': [
      'Access-Control-Allow-Origin: *'
    ],
}
},

  router: {
    middleware: []
  },

  image: {
    // Options
  },

  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: {
          welcome: 'Welcome'
        },
        fr: {
          welcome: 'Bienvenue'
        },
        es: {
          welcome: 'Bienvenido'
        }
      }
    }
  },

  axios: {
    baseURL: '~/',
  },
  
  apollo: {
    clientConfigs: {
      default: '~/apollo/clientConfig.js',
      alternativeClient: {
        httpEndpoint: 'http://0.0.0.0:8000',

        browserHttpEndpoint: '/api/graphiql',

        httpLinkOptions: {
          credentials: 'same-origin'
        },

        wsEndpoint: 'ws://0.0.0.0:8000',
        tokenName: 'apollo-token',
        persisting: false,
        websocketsOnly: false
      },
    },
    
    defaultOptions: {
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    
    errorHandler: '~/plugins/apollo-error-handler.js',
    authenticationType: 'Bearer', 
    tokenName: 'apollo-token',
    cookieAttributes: {
      expires: 7,
      path: '/',
      domain: 'example.com',
      secure: false,
    },
  },

  sentry: {
    dsn: 'https://b54ea5cfd2cc4c23b49c3d5c6fbbd351@o996770.ingest.sentry.io/6140531',
    config: {
    }
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  content: {},

  formulate: {
    configPath: '~/formulate.config.js'
  },

  /* recaptcha: {
        siteKey: process.env.RECAPTCHA_SITE_KEY,
        version: 3
      }, */

  serverMiddleware: [
    '~/config/postgraphile.config.js'
  ],
  
  build: {
    extend(config, ctx) {},
  },
}
