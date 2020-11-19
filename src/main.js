import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ddForm from 'vue-dd-form';
import VueExcelEditor from 'vue-excel-editor';


Vue.config.productionTip = false
Vue.component('dd-form', ddForm);
Vue.component('excel-editor', VueExcelEditor);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
