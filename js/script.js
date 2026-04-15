function carregarTabela(dados) {
    const tabela = document.getElementById("catalogo-body");
    tabela.innerHTML = "";

    dados.forEach(item => {
        const linha = document.createElement("tr");

        linha.innerHTML = `
            <td><img src="${item.imagem}" width="170"></td>
            <td>${item.produto}</td>
            <td>${item.material}</td>
            <td>${item.info}</td>
        `;

        tabela.appendChild(linha);
    });
}
