<template>
  <div class="container is-fullhd">
    <div class="login-area">
      <p class="title-text">
        <b>HYDRO</b>SYS
      </p>
      <hr>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input class="input" type="password" placeholder="Senha">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="control">
        <button class="button is-dark is-fullwidth">Entrar</button>
      </div>
      <p class="cadastro">
        Não tem uma conta?
        <a>Cadastre-se!</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
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

.login-area p.cadastro a {
  color: white;
  font-size: 1.2rem;
  text-decoration: underline;
}

.login-area p.cadastro a:hover {
  color: #1e1e2a;
}
</style>
