import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import VueRouter from 'vue-router';
import tabla_ninos from './components/tabla_nin.vue';
import formulario from './components/formulario.vue';
import inicio from './components/inicio.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(axios);

// rutas de navegacion
const routes = [
  {path:'/', name:'inicio', component:inicio},
  {path:'/lista_ninos', name:'lista_ninos', component:tabla_ninos},
  {path:'/formulario', name:'formulario', component:formulario},
  {path:'/inicio', name:'inicio', component:inicio}
];
const router = new VueRouter({routes, mode: 'history'});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
