<template>
  <div class="container is-fullhd">
    <div class="form-area has-text-left">
      <p class="title-text has-text-centered">
        <b>Alterar</b> Senha
      </p>
      <hr>

      <div class="field">
        <label class="label">Nova Senha</label>
        <div class="control has-icons-left has-icons-right">
          <input v-model="senha1" class="input" type="password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          <p v-if="erros && erros.senha1" class="help">{{erros.senha1}}</p>
        </div>
      </div>

      <div class="field">
        <label class="label">Repetir Senha</label>
        <div class="control has-icons-left has-icons-right">
          <input v-model="senha2" class="input" type="password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
          <p v-if="erros && erros.senha2" class="help">{{erros.senha2}}</p>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <p class="control">
          <a class="button is-dark" @click="cadastrar()">Alterar</a>
        </p>
        <p class="control">
          <router-link to="/" class="button is-light">Cancelar</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import * as usuariosUtils from "../data/usuarios";

export default {
  name: "ManageUser",
  data() {
    return {
      erros: null,
      senha1: null,
      senha2: null,
      usuario: null
    };
  },
  methods: {
    async cadastrar() {
      if (this.checarForm()) {
        let usuario = {...this.usuario};
        usuario.senha = this.senha1;

        let resposta = await usuariosUtils.editUser(usuario);

        if (resposta.status) {
          this.$router.push({ name: "inicio" });
        }
      }
    },
    checarForm() {
      this.erros = {};

      if (!this.senha1 && !this.senha2) {
        this.erros.senha1 = "A senha é obrigatória.";
        this.erros.senha2 = "É necessário repetir a senha.";
      } else if (!this.senha1) {
        this.erros.senha1 = "A senha é obrigatória.";
      } else if (!this.senha2) {
        this.erros.senha2 = "É necessário repetir a senha.";
      } else {
        if (this.senha1 === this.senha2) {
          return true;
        } else {
          this.erros.senha2 = "Repetir conforme a nova senha.";
        }
      }
    }
  },
  mounted() {
    this.usuario = JSON.parse(localStorage.getItem('usuario'));
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


