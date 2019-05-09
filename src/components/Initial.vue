<template>
<div class="container">
    <div class="mensagem has-text-left">
        <h1 class="title">Primeiro Passos</h1>
        <p>1 - Para iniciar adicione um nó sensor, clicando no link disponível no menu de gerenciamento do usuário, que se encontra no topo da página no lado direito.</p>
        <p>2 - Envie os dados em formato JSON para a API do HydroSys via POST, através do endpoint <a>https://hydroapi.herokuapp.com/dados</a>, contendo o token gerado ao adicionar o nó sensor juntamente com os demais dados que deseja exibir no dashboard.</p>
        <p>3 - Os links de acesso aos nós sensores adicionados, estarão disponíveis no menu que se encontra no topo da página no lado esquerdo.</p>
    </div>
</div>
</template>
<script>
export default {
    name: "Initial"
}
</script>
<style scoped>
.container {
    padding: 6rem 8rem;
}

.mensagem {
    padding: 2rem;
    background-color: (255, 255, 255, 0.1);
    border-radius: 5px;
}

.mensagem * {
    color: white;
}

.mensagem p {
    margin-bottom: 1rem;
}

.mensagem p a {
    text-decoration: underline;
}
</style>
