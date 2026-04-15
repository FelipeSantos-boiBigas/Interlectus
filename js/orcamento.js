// carregar produtos do JSON
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

// produtos com opções extras
const produtosComOpcao = ["COD01", "COD07", "B05", "B02"];

const produtoSelect = document.getElementById("produto");
const opcoesPortao = document.getElementById("opcoes-portao");

// mostrar/esconder opções
produtoSelect.addEventListener("change", () => {
    const valor = produtoSelect.value;

    if (produtosComOpcao.includes(valor)) {
        opcoesPortao.style.display = "block";
    } else {
        opcoesPortao.style.display = "none";
    }
});

// envio do formulário
document.getElementById("form-orcamento").addEventListener("submit", (e) => {
    e.preventDefault();

    const dados = {
        produto: produtoSelect.value,
        largura: document.getElementById("largura").value,
        altura: document.getElementById("altura").value,
        cor: document.getElementById("cor").value,
        furos: document.getElementById("furos").checked
    };

    const mensagem = `Olá! Tudo bem?

Gostaria de solicitar um orçamento com base nas seguintes especificações:

🔧 Produto: ${dados.produto}

📏 Medidas:
- Largura: ${dados.largura} cm
- Altura: ${dados.altura} cm

${produtosComOpcao.includes(dados.produto) ? `
🎨 Detalhes adicionais:
- Cor: ${dados.cor}
- Furos: ${dados.furos ? "Sim" : "Não"}
` : ""}

Poderia, por gentileza, me informar valores e prazos?

Desde já, agradeço pela atenção.`;

    const numero = "5519989874111"; // COLOQUE SEU NÚMERO

    window.open(`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`);
});
