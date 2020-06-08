// Vue Instance 
new Vue({
  el    : '#app',
  data  : {
    title : 'Conditionals',
    showName: false,
    showAge : false,
  },
  methods:{
    toggleName(){
      this.showName = !this.showName
    },
    toggleAge(){
      this.showAge = !this.showAge
    }
  }
})
