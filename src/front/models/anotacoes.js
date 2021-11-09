class Anotacoes {
    constructor(titulo, nota) {
        if (typeof this.titulo == "string" && typeof this.nota == "string"){
            this.titulo = titulo;
            this.nota = nota;
        } else {
            alert("Criação de notas - dados inválidos")
        }
    }
}