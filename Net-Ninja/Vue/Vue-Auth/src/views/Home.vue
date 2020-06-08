<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Login msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { auth } from '@/database';
import Login from "@/components/home/Login.vue";

export default {
  name: "Home",
  components: {
    Login
  },
  mounted(){
    console.log(auth.currentUser);
  }
};
</script>
