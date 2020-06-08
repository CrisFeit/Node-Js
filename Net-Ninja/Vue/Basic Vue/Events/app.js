// Vue Instance 
new Vue({
  el    : '#app',
  data  : {
    title   : 'The Event Object',
    name    : 'Cris',
    coords  :{
      x: 0,
      y: 0,
    }
  },

  methods:{
    updateName(e){
      this.name = e.target.value
    },
    logEvent(e){
      console.log(e)
    },
    logCoords(e){
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
    }
  }
})