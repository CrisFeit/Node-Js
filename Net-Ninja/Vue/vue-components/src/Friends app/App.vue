<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <Navbar />
    <AllFriends v-bind:friends="friends" v-on:delete="deleteFriend" />
    <OnlineFriends v-bind:friends="friends" />
  </div>
</template>

<script>
import Navbar from './Navbar';
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';

export default {
  name: 'app',
  components : {
    Navbar,
    OnlineFriends,
    AllFriends
  },
  data () {
    return {
      title: 'Welcome to Your Vue.js App',
      friends : [
        { name: 'Mario' , online: true},
        { name: 'Luigi' , online: false},
        { name: 'Toad' , online: true},
        { name: 'Bowser' , online: false},
      ] 
    }
  },
  methods :{
    deleteFriend(payload){
      console.log(payload);
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name;
      });
    }
  }
}
</script>

<style>
 h1{
   color: #444;
   font-weight: normal;
   text-align: center;
 }
</style>
