<template>
  <div class="container is-fullhd">
    <div class="form-area has-text-left">
      <p class="title-text has-text-centered">
        <b>Adicionar</b> Nó Sensor
      </p>
      <hr>

      <p v-if="erros && erros.msg" class="has-text-centered">{{erros.msg}}</p>

      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input v-model="nome" class="input" type="text" placeholder="Nome do Nó Sensor">
          <p v-if="erros && erros.nome" class="help">{{erros.nome}}</p>
        </div>
      </div>

      <div class="field">
        <label class="label">Descrição</label>
        <div class="control has-icons-left has-icons-right">
          <textarea v-model="descricao" class="textarea has-fixed-size" placeholder="Descrição para o Nó Sensor"></textarea>
          <p v-if="erros && erros.descricao" class="help">{{erros.descricao}}</p>
        </div>
      </div>

      <div class="field">
        <label class="label">Token</label>
        <div class="control has-icons-left has-icons-right">
          <input v-model="token" class="input token" type="text" readonly>
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <p class="control">
          <a class="button is-dark" @click="cadastrar()">Salvar</a>
        </p>
        <p class="control">
          <router-link to="/" class="button is-light">Cancelar</router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import randomatic from "randomatic";
import * as usuariosUtils from '../data/usuarios';

export default {
  name: "AddNode",
  data() {
    return {
      erros: {},
      nome: "",
      descricao: "",
      token: ""
    }
  },
  methods: {
    gerarToken() {
      return randomatic('aA0', 20);
    },
    async cadastrar() {
      let usuario = JSON.parse(localStorage.getItem('usuario'));

      if(this.validar()) {
        if(!usuario.token) {
          usuario.token = []
        } 
        let noSensor = {
          nome: this.nome,
          descricao: this.descricao,
          token: this.token
        }
        
        usuario.token.push(noSensor);

        const resposta = await usuariosUtils.addNode(usuario);

        if(resposta.status) {
          localStorage.setItem('usuario', JSON.stringify(usuario));
          this.$router.push("/");
        }
      }
    },
    validar() {
      this.erros = {};
      if(!this.nome) {
        this.erros.nome = "Nome é um campo obrigatório!";
      }
      if(!this.descricao) {
        this.erros.descricao = "Descrição é um campo obrigatório!";
      }
      if(this.nome && this.descricao) {
        return true;
      }
    }
  },
  beforeMount() {
    this.token = this.gerarToken();
  }
}
</script>
<style scoped>
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

.form-area .field .input:focus,
.form-area .field .textarea:focus {
  border-color: grey;
  box-shadow: 0 0 0.125em grey;
}

.form-area .control .button {
  margin-top: 1rem;
}

.token {
  color: grey;
}
</style>

