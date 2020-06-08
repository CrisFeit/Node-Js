import Vue from 'vue'
import App from './App.vue'

// create global filter
Vue.filter('snippet' , val => {
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,200);
  console.log(val)
  return val + '...'
});
new Vue({
  el: '#app',
  render: h => h(App)
})
