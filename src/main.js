import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Catalog from "./views/Catalog.vue"
import Home from "./views/Home.vue"
import AddPatient from "./views/AddPatient.vue"
// import Content from "./components/content.vue"


Vue.use(VueRouter)
Vue.use(BootstrapVue);

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/catalog",
      name: "Catalog",
      component: Catalog
    },
    {
      path: "/add-patient",
      name: "Add Patient",
      component: AddPatient
    }
  ]
})

export default router

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')