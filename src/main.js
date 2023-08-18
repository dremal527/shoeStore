import Vue from 'vue'
import App from './App.vue'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret, faArrowLeftLong, faArrowRightLong, faCartShopping } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faArrowLeftLong, faArrowRightLong, faCartShopping)
/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
