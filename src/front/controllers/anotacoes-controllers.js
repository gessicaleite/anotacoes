class AnotacoesController {
    constructor () {
        this.anotacoes = [];
    }

    addAnotacao () {
        this.titulo = document.getElementById("titulo").value;
        this.nota = document.getElementById("descricaoTarefa").value;
        let novaAnotacao = new Anotacoes (this.titulo, this.nota);
        this.anotacoes.push(novaAnotacao);
    }
}

let minhaAnotacao = new AnotacoesController();
const botao = document.getElementById("botaoAdd");

botao.addEventListener ("click", (e) => {
    e.preventDefault();
    minhaAnotacao.addAnotacao();
})