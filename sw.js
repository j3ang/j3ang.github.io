importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0b48d24a9e93e25941ea.js",
    "revision": "dd9abb4a5cd2e2f5a0af6962b026cbe9"
  },
  {
    "url": "/_nuxt/5acf0174cf65609e7f37.js",
    "revision": "bfbc358727aec4d161c3fd0495f19600"
  },
  {
    "url": "/_nuxt/a896217b2fd28443bca2.js",
    "revision": "2946ee42ca6e983f8c4ae8fc74aea975"
  },
  {
    "url": "/_nuxt/b99d9552cfad9e52b18f.js",
    "revision": "f344d3b2f7f96d792e89abac74f34bd0"
  },
  {
    "url": "/_nuxt/d5a27b3083590ca885e8.js",
    "revision": "6444d48bf630c70c72b558bee367c124"
  },
  {
    "url": "/_nuxt/ea54f017137322aa9c9e.js",
    "revision": "22e168a8737b644fbe1bb8a64fce89ec"
  }
], {
  "cacheId": "wuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
