// Carregar produtos do JSON
fetch("js/dados.json")
.then(res => res.json())
.then(dados => {
    const select = document.getElementById("produto");

    dados.forEach(item => {
        const option = document.createElement("option");
        option.value = item.produto;
        option.textContent = item.produto;
        select.appendChild(option);
    });
});

// Mostrar opções extras se for portão
const produtoSelect = document.getElementById("produto");
const opcoesPortao = document.getElementById("opcoes-portao");

produtoSelect.addEventListener("change", () => {
    const valor = produtoSelect.value.toLowerCase();

    if (valor.includes("portao")) {
        opcoesPortao.style.display = "block";
    } else {
        opcoesPortao.style.display = "none";
    }
});

// Enviar orçamento
document.getElementById("form-orcamento").addEventListener("submit", (e) => {
    e.preventDefault();

    const dados = {
        produto: produtoSelect.value,
        largura: document.getElementById("largura").value,
        altura: document.getElementById("altura").value,
        cor: document.getElementById("cor").value,
        furos: document.getElementById("furos").checked
    };

    const mensagem = `
Produto: ${dados.produto}
Largura: ${dados.largura} cm
Altura: ${dados.altura} cm
Cor: ${dados.cor}
Furos: ${dados.furos ? "Sim" : "Não"}
    `;

    // Substitua pelo seu número com DDD (ex: 5511999999999)
    const numero = "SEUNUMERO";

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
});
