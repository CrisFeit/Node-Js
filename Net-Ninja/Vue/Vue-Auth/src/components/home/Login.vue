<template>
  <div class="login">
    <form v-on:submit.prevent="login" class="card-panel">
      <h2 class="center deep-purple-text">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Senha:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <p v-show="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field">
        <button class="btn deep-durple">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from '@/database';
export default {
  name: 'Login',
  data(){
    return {
      email : null,
      password : null,
      feedback : null,
    }
  },
  methods : {
    login() {
      if(this.email && this.password){
        auth.signInWithEmailAndPassword(this.email,this.password)
        .then( () => {
          this.$router.push({ name : 'User'})
        }).catch(err => {
          err.code === 'auth/user-not-found' ? this.feedback = 'Senha ou usuário icorreto' : null;
        })
        this.feedback = null
      }
      else{
        this.feedback = 'Preencha todos os campos'
      }
    }
  }
};
</script>