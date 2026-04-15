catalogoBody = document.querySelector('#catalogo-body')
fetch('js/dados.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o catálogo JSON: ' + response.statusText);
            }
            return response.json();
        })
        .then(materias => {
            materias.forEach(materia => {
                const newRow = catalogoBody.insertRow();
                const imgCell = newRow.insertCell();
                const img = document.createElement('img');
                img.src = materia.imagem;
                img.alt = materia.materia;
                img.width = 100;
                img.height = 100;
                imgCell.appendChild(img);
                newRow.insertCell().textContent = materia.materia;
                newRow.insertCell().textContent = materia.nivel;
                newRow.insertCell().textContent = materia.carga_horaria;
                
                // Célula 5: Link Externo
                const linkCell = newRow.insertCell();
                const link = document.createElement('a');
                link.href = materia.link;
                link.textContent = materia.link_texto;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                linkCell.appendChild(link);
            });
        })
        .catch(error => {
            console.error('Houve um problema ao processar o catálogo:', error);
            catalogoBody.innerHTML = '<tr><td colspan="5">Não foi possível carregar o catálogo de matérias.</td></tr>';
        });
