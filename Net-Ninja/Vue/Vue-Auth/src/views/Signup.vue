<template>
  <section class="signup container">
    <form v-on:submit.prevent="signup" class="card-panel">
      <h2 class="center deep-purple-text">Cadastro</h2>
      <div class="field">
        <label for="name">Nome:</label>
        <input type="name" name="name" v-model="name" />
      </div>
      <div class="field">
        <label for="cpf">Cpf:</label>
        <input type="text" name="cpf" v-model="cpf" />
      </div>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Senha:</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <p class="red-text center" v-show="feedback">{{ feedback }}</p>
      <div class="field center">
        <button class="btn deep-purple">Cadastrar</button>
      </div>
    </form>
  </section>
</template>

<script>
import { db , auth} from "@/database";

export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      cpf: null,
      name: null,
      feedback: null
    };
  },
  methods: {
    signup() {
      if (this.email && this.password && this.name) {
        (async() => {
        let ref = db.collection("users").doc(this.cpf)
            if ( await ref.get().then(snapshot => snapshot.exists)) {
              this.feedback = "Usuário já cadastrado";
            } else {
                 auth.createUserWithEmailAndPassword(this.email, this.password)
                .then(cred => {
                    ref.set({
                    name: this.name,
                    cpf : this.cpf,
                    email :this.email,
                    user_id: cred.user.uid
                  });
                })
                .then(() => this.$router.push({ name: "User" }))
                .catch(err => {
                  err.code == "auth/weak-password"
                    ? (this.feedback = "Senha deve conter no mínimo 6 caracteres")
                    : err.code == "auth/email-already-in-use"
                    ? (this.feedback = "Usuário já cadastrado")
                    : null;
                });
            }
        })();
      } else {
        this.feedback = "Preencha todos os campos";
      }
    }
  }
};
</script>