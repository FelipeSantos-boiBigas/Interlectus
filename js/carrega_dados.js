document.addEventListener("DOMContentLoaded", function () {
    fetch("dados.json")
        .then(response => response.json())
        .then(dados => {
            const tabela = document.getElementById("catalogo-body");

            dados.forEach(item => {
                const linha = document.createElement("tr");

                linha.innerHTML = `
                    <td><img src="${item.imagem}" alt="${item.nome}" width="150"></td>
                    <td>${item.nome}</td>
                    <td>${item.material}</td>
                    <td>${item.info}</td>
                `;

                tabela.appendChild(linha);
            });
        })
        .catch(error => console.error("Erro ao carregar dados:", error));
});
