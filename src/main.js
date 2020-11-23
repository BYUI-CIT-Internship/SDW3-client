import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ddForm from 'vue-dd-form';
import VueExcelEditor from 'vue-excel-editor';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.component('dd-form', ddForm);
Vue.use(VueExcelEditor);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
