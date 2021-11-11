class AnotacoesViews {

    renderizaAnotacao() {
        var body = document.getElementById("notes");
        let pai = document.createElement("div");
        pai.classList.add("pai")
        let div = document.createElement("div");
        div.classList.add("bg-dark");
        div.classList.add("estilo-div");
        div.classList.add("align-content-stretch");
        body.appendChild(pai);
        pai.appendChild(div);
        let h6 = document.createElement("h6");
        h6.textContent = document.getElementById("titulo").value;
        h6.classList.add("titulo")
        div.appendChild(h6);
        let p = document.createElement("p");
        p.classList.add("paragrafo")
        p.textContent = document.getElementById("descricaoTarefa").value;
        div.appendChild(p);
    }
}

let renderizando = new AnotacoesViews

botao.addEventListener ("click", (e) => {
    e.preventDefault();
    renderizando.renderizaAnotacao();
})