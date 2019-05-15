<template>
  <div class="container is-fullhd">
    <div class="form-area has-text-left">
      <p class="title-text has-text-centered">
        <b>Primeiro</b> Acesso
      </p>
      <hr>

      <p v-if="erros && erros.msg" class="has-text-centered">{{erros.msg}}</p>
      
      <div class="field">
        <label class="label">Nome</label>
        <div class="control has-icons-left has-icons-right">
          <input v-model="nome" class="input" type="text" placeholder="e.g. Bruno Vieira Rosa">
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <p v-if="erros && erros.nome" class="help">{{erros.nome}}</p>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input v-model="email" class="input" type="email" placeholder="e.g. bruno.vieira.rosa@gmail.com">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <p v-if="erros && erros.email" class="help">{{erros.email}}</p>
        </div>
      </div>

      <div class="field">
        <label class="label">Senha</label>
        <div class="control has-icons-left has-icons-right">
          <input v-model="senha" class="input" type="password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          <p v-if="erros && erros.senha" class="help">{{erros.senha}}</p>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <p class="control">
          <a class="button is-dark" @click="cadastrar()">Entrar</a>
        </p>
        <p class="control">
          <router-link to="/" class="button is-light">Cancelar</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import * as usuariosUtils from '../data/usuarios';

export default {
  name: "SignUp",
  data() {
    return {
      erros: null,
      nome: null,
      email: null,
      senha: null
    }
  },
  methods: {
    async cadastrar() {
      if(this.checarForm()) {
        let usuario = {
          nome: this.nome,
          email: this.email,
          senha: this.senha
        }
        let resposta = await usuariosUtils.newUser(usuario);

        if(resposta.status) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.$router.push({name: 'inicio'});
        } else {
          this.erros = {};
          this.erros.msg = resposta.message;
          console.log(this.erros);
        }
      }
    },
    checarForm() {
      this.erros = {};

      if (!this.nome) {
        this.erros.nome = 'O nome é obrigatório.';
      }

      if (!this.email) {
        this.erros.email = 'O e-mail é obrigatório.';
      } else if (!this.validarEmail(this.email)) {
        this.erros.email = 'Utilize um e-mail válido.';
      }

      if (!this.senha) {
        this.erros.senha = 'A senha é obrigatória.';
      }

      if (!this.erros.nome && !this.erros.email && !this.erros.senha) {
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
.<style scoped>
.container {
  display: flex;
  height: 100vh;
}
.form-area {
  background: linear-gradient(0deg, #389466, #42b883);
  margin: auto;
  padding: 30px;
  width: 550px;
  border-radius: 5px;
}

.form-area .title-text {
  color: white;
  font-size: 2.3rem;
  margin-bottom: 0;
}

.form-area hr {
  margin-top: 0;
  width: 3rem;
  margin-left: auto;
  margin-right: auto;
}

.form-area .field .label {
  color: white;
}

.form-area .field .input:focus {
  border-color: grey;
  box-shadow: 0 0 0.125em grey;
}

.form-area .control .button {
  margin-top: 1rem;
}
</style>


