class AnotacoesViews {

    renderizaAnotacao() {
        var pai = document.getElementById("notes")
        let div = document.createElement("div");
        // div.classList.add("estilo");
        pai.appendChild(div);
        let h6 = document.createElement("h6");
        h6.textContent = document.getElementById("titulo").value;
        div.appendChild(h6);
        let p = document.createElement("p");
        p.textContent = document.getElementById("descricaoTarefa").value;
        h6.appendChild(p);
    }
}

let renderizando = new AnotacoesViews

botao.addEventListener ("click", (e) => {
    e.preventDefault();
    renderizando.renderizaAnotacao();
})