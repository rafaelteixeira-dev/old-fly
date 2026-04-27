// Captura o parâmetro na URL (ex: ?remedio=metformina)
const urlParams = new URLSearchParams(window.location.search);
const nomeRemedio = urlParams.get('remedio');

if (nomeRemedio) {
    // Transforma a primeira letra em maiúscula e exibe no H2
    document.getElementById('nome-remedio').innerText = nomeRemedio.charAt(0).toUpperCase() + nomeRemedio.slice(1);

    // Lógica para adicionar quantidade comprada
    const btnAdd = document.getElementById('btn-add-estoque');
    const inputQtd = document.getElementById('input-qtd');
    const displayQtd = document.getElementById('qtd-atual');
    const statusEstoque = document.getElementById('status-estoque');

    // Função para atualizar o rótulo de status
    const atualizarStatusUI = (qtd) => {
        if (qtd <= 5) {
            statusEstoque.innerText = 'Crítico';
            statusEstoque.style.color = 'var(--red-text)';
        } else {
            statusEstoque.innerText = 'Ok';
            statusEstoque.style.color = 'var(--sidebar-bg)';
        }
    };

    btnAdd.addEventListener('click', () => {
        const valorAdicional = parseInt(inputQtd.value);
        if (valorAdicional > 0) {
            const valorAtual = parseInt(displayQtd.innerText);
            const novoTotal = valorAtual + valorAdicional;
            displayQtd.innerText = novoTotal;
            atualizarStatusUI(novoTotal);
            inputQtd.value = ''; // Limpa o campo
            alert(`${valorAdicional} unidades adicionadas ao estoque de ${nomeRemedio}!`);
        } else {
            alert('Por favor, insira uma quantidade válida.');
        }
    });

    // Executa uma vez ao carregar para definir o status inicial
    atualizarStatusUI(parseInt(displayQtd.innerText));

    // Simulação de dados de farmácias
    const farmaciasMock = [
        { nome: 'Drogasil', preco: 12.50 },
        { nome: 'Pague Menos', preco: 14.90 },
        { nome: 'Ultrafarma', preco: 10.99 },
        { nome: 'Droga Raia', preco: 13.20 }
    ];

    const listaFarmacias = document.getElementById('lista-farmacias');
    
    // Ordenar por preço (mais barato primeiro)
    farmaciasMock.sort((a, b) => a.preco - b.preco);

    // Renderizar a lista
    listaFarmacias.innerHTML = farmaciasMock.map(f => `
        <div class="pharmacy-item">
            <span class="pharmacy-name"><i class="fa-solid fa-store"></i> ${f.nome}</span>
            <span class="pharmacy-price">R$ ${f.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </div>
    `).join('');
} else {
    document.getElementById('lista-farmacias').innerHTML = '<p>Selecione um remédio para ver os preços.</p>';
}