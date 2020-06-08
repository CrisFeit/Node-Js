<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">

        <router-link :to="{name: !user ? 'Home' : 'User'}" class="brand-logo left">Auth App</router-link>
        <ul class="right">
          <li v-if="!user"><router-link :to="{ name: 'Home' }">Login</router-link></li>
          <li v-if="!user"><router-link :to="{ name: 'Signup' }">Cadastre-se</router-link></li>
          <li v-if="user">
            <router-link :to="{ name: 'Profile' }">{{ user.email }}</router-link>
          </li>
          <li v-if="user"><a v-on:click="logout">Sair</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { auth } from '@/database';
export default {
  name: "Navbar",
  data() {
    return {
      user:null,
    };
  },
  methods: {
    logout() {
      auth.signOut().then( () => this.$router.push({ name : 'Home'}))
    }
  },
  created(){
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.user = user
      }else{
        this.user = null
      }
    })
  }
}
</script>