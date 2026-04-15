<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Orçamento</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<nav>
    <a href="index.html">Home</a>
    <a href="servico.html">Serviços</a>
    <a href="orcamento.html">Orçamento</a>
    <a href="contato.html">Contatos</a>
</nav>

<h2 style="text-align:center;">Solicitar Orçamento</h2>

<form id="form-orcamento" class="form-orcamento">

    <label>Produto:</label>
    <select id="produto" required></select>

    <label>Largura (cm):</label>
    <input type="number" id="largura" required>

    <label>Altura (cm):</label>
    <input type="number" id="altura" required>

    <!-- Opções extras -->
    <div id="opcoes-portao" style="display:none;">
        
        <label>Cor:</label>
        <select id="cor">
            <option>Preto</option>
            <option>Branco</option>
            <option>Cinza</option>
        </select>

        <label>
            <input type="checkbox" id="furos">
            Com furos
        </label>

    </div>

    <button type="submit">Enviar orçamento</button>

</form>

<script src="js/orcamento.js"></script>

</body>
</html>
