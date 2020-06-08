import Vue from "vue";
import App from "./App.vue";
import router from "./router/routes";
import store from "./store";
import { auth } from '@/database';

Vue.config.productionTip = false;

let app = null;

// Espera o serviço de autenticação iniciar antes de criar a aplicação 
auth.onAuthStateChanged(() => {  
  if(!app){
   app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})
