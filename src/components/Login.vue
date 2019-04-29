<template>
  <div class="container is-fullhd">
    <div class="login-area">
      <p class="title-text">
        <b>HYDRO</b>SYS
      </p>
      <hr>
      <p v-if="mensagem" class="erro-msg">{{mensagem}}</p>
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input v-model="email" class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
           <p v-if="erros && erros.email" class="help">{{erros.email}}</p>
        </div>
      </div>
      <div class="field">
        <div class="control has-icons-left has-icons-right">
          <input v-model="senha" class="input" type="password" placeholder="Senha">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
           <p v-if="erros && erros.senha" class="help">{{erros.senha}}</p>
        </div>
      </div>
      <div class="control">
        <button @click="logar()" class="button is-dark is-fullwidth">Entrar</button>
      </div>
      <p class="cadastro">
        Não tem uma conta?
        <router-link to="/cadastro" class="link-cadastro">Cadastre-se!</router-link>
      </p>
    </div>
  </div>
</template>
<script>
import * as usuariosUtils from '../data/usuarios';

export default {
  name: "Login",
  data() {
    return {
      email: null,
      senha: null,
      erros: {},
      mensagem: null
    }
  },
  methods: {
    async logar() {
      this.mensagem = null;

      if(this.checarForm()) {
        let usuario = {
          email: this.email,
          senha: this.senha
        }
        let resposta = await usuariosUtils.login(usuario);

        if(resposta.status) {
          localStorage.setItem('usuario', JSON.stringify(resposta.usuario));
          this.$router.push({name: 'dashboard'});
        } else {
          this.mensagem = resposta.message;
        }
      }
    },
    checarForm() {
      this.erros = {};

      if (!this.email) {
        this.erros.email = 'O e-mail é obrigatório.';
      } else if (!this.validarEmail(this.email)) {
        this.erros.email = 'Utilize um e-mail válido.';
      }

      if (!this.senha) {
        this.erros.senha = 'A senha é obrigatória.';
      }

      if (!this.erros.nome && !this.erros.email) {
        return true;
      }

    },
    validarEmail (email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
};
</script>
<style scoped>
.container {
  display: flex;
  height: 100vh;
}

.login-area {
  margin: auto;
  background: linear-gradient(0deg, #389466, #42b883);
  width: 500px;
  padding: 30px;
  border-radius: 5px;
}

.login-area .title-text {
  color: white;
  font-size: 2.3rem;
  margin-bottom: 0;
}

.login-area hr {
  margin-top: 0;
  width: 3rem;
  margin-left: auto;
  margin-right: auto;
}

.login-area .field .input:focus {
  border-color: grey;
  box-shadow: 0 0 0.125em grey;
}

.login-area .control .button {
  margin-top: 1rem;
}

.login-area p.cadastro {
  color: white;
  margin-top: 1rem;
}

.login-area p.cadastro .link-cadastro {
  color: white;
  font-size: 1.2rem;
  text-decoration: underline;
}

.login-area p.cadastro .link-cadastro:hover {
  color: #1e1e2a;
}
</style>
