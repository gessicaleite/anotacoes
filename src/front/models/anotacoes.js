class Anotacoes {
    constructor(titulo, nota) {
        if (!isNumber(titulo) && !isNumber(nota)) {
            this.titulo = titulo;
            this.nota = nota;
        } else {
            alert("Criação de notas - dados inválidos");
        } 
    }
}

function isNumber(n) {
    return !isNaN(n);
}