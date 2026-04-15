document.addEventListener("DOMContentLoaded", () => {
    fetch("./dados.json")
        .then(response => response.json())
        .then(dados => carregarTabela(dados))
        .catch(erro => console.error("Erro ao carregar JSON:", erro));
});
