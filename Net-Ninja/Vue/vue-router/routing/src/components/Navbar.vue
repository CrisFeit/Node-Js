<template>
  <nav class="main-nav">
    <ul>
      <li><router-link :to="{name : 'Home'}">Home</router-link></li>
      <li><router-link :to="{name : 'About'}">About</router-link></li>
    </ul>
    <h3>User Profiles</h3>
    <ul>
      <li v-for="(id,index) in userIds" :key="index">
        <router-link :to="{ name : 'ViewProfile' , params : {user_id :id }}">
          <span> Profile {{ id }} </span>
        </router-link>
      </li>
    </ul>
    <h3>Navigation control</h3>
    <ul>
      <li><button v-on:click="goBack()">Redirect to Back</button></li>
      <li><button v-on:click="goHome()">Redirect to Home</button></li>
      <li><button v-on:click="goFoward()">Redirect to Foward</button></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return{
      userIds : ['1','2','3','4']
    }
  },
  methods:{
    goHome() {
      this.$router.push({ name: 'Home' })
    },
    goBack() {
      this.$router.go(-1)
    },
    goFoward() {
      this.$router.go(1)
    }
  },
}
</script>

<style>
ul{
  list-style: none;
  text-align: center;
  padding: 0 ;
}
li{
  display: inline-block;
  padding: 10px;
}
a{
  text-decoration: none;
  color: #42b983;
}
.router-link-exact-active{
  color: #2c3e50;
}
</style>