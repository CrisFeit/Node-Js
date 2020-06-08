<template>
  <div id="all-friends">
    <h2>All friends</h2>
    <div v-for="(friend,index) in friends" v-bind:key="index">
      <span @click="unfriend(friend.name)"> {{ friend.name }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name    : 'All Friends',
  props   : ['friends'] ,
  data(){
    return{
      
    }
  },
  methods :{
    unfriend(name){
      this.$emit('delete', { name } )
      
    }
  }
  }
</script>

<style>

</style>