import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import './assets/css/fonts.css'
import './assets/css/media.css'
import './assets/css/vanilla-calendar.css'
import './assets/css/main.css'
// import $ from 'jquery'
//
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import router from "@/routes";


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
