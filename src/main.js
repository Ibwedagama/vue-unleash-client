import Vue from 'vue'
import App from './App.vue'

import { UnleashClient, EVENTS } from 'unleash-proxy-client'

const unleash = new UnleashClient({
  url: 'http://localhost:3000/proxy',
  clientKey: 'frontend',
  appName: 'learn-unleash-client',
  refreshInterval: 1,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data() {
    return {
      api: null
    }
  },
  created() {
    unleash.start()

    unleash.on(EVENTS.READY, () => {
      const variant = unleash.getVariant('discount')
      if (variant.name === 'disabled') {
        console.log(variant.name)
      } else {
        console.log(variant.payload.value)
      }
    })
  },
  mounted() {
    unleash.updateContext({ userId: 'vipuser' })
    unleash.on(EVENTS.UPDATE, () => {
      const variant = unleash.getVariant('discount')
      console.log(variant.name)
    })
  }
}).$mount('#app')
