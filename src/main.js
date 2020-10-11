import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import dateFilter from "@/filters/date.filter";
import currencyFilter from "@/filters/currency.filter";
import store from "./store";
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader';
import 'materialize-css/dist/js/materialize.min';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.component('Loader', Loader);

firebase.initializeApp({
  apiKey: "AIzaSyCPAW2zMMYJLI73maeYxIKekfL_jKedbo8",
  authDomain: "vue-crmt.firebaseapp.com",
  databaseURL: "https://vue-crmt.firebaseio.com",
  projectId: "vue-crmt",
  storageBucket: "vue-crmt.appspot.com",
  messagingSenderId: "397684992658",
  appId: "1:397684992658:web:6c212e762698e428b0d44b"
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
