document.addEventListener("DOMContentLoaded", function () {
    fetch("dados.json")
        .then(response => response.json())
        .then(dados => carregarTabela(dados))
        .catch(error => console.error("Erro ao carregar dados:", error));
});
