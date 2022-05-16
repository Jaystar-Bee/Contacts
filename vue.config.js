const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
})

// module.exports = {
//   // ...other vue-cli plugin options...
//   pwa: {
//     name: 'Contacts',
//     appleMobileWebAppCapable: 'yes',
//     appleMobileWebAppStatusBarStyle: 'black',

//     // configure the workbox plugin
//     workboxPluginMode: 'InjectManifest',
//     workboxOptions: {
//       swSrc: 'src/service-worker.js',
//     }
//   }
// }
