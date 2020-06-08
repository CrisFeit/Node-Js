// Vue Instance 
new Vue({
  el    : '#app',
  data  : {
    title   : 'Modifier Events'
  },

  methods:{
    
    logMessage(e){
      console.log(e.target.textContent)
    }
  }
})