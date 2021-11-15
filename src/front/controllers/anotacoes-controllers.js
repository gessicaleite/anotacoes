class AnotacoesController {
    constructor () {
        this.anotacoes = [];
    }

    addAnotacao () {
        this.titulo = document.getElementById("titulo").value;
        this.nota = document.getElementById("descricaoTarefa").value;
        let novaAnotacao = new Anotacoes (this.titulo, this.nota);
        
        if (novaAnotacao.nota && novaAnotacao.titulo) {
            this.anotacoes.push(novaAnotacao);
        } else {
            document.getElementById("titulo").value = "";
            document.getElementById("descricaoTarefa").value = "";
        }
    }
}

let minhaAnotacao = new AnotacoesController();
const botao = document.getElementById("botaoAdd");

botao.addEventListener ("click", (e) => {
    e.preventDefault();
    minhaAnotacao.addAnotacao();
})