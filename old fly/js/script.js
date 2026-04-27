document.addEventListener('DOMContentLoaded', () => {
    // Links da Sidebar
    const navDashboard = document.getElementById('nav-dashboard');
    const navReceitas = document.getElementById('nav-receitas');
    
    // Seções de visualização
    const viewDashboard = document.getElementById('view-dashboard');
    const viewReceitasVazia = document.getElementById('view-receitas-vazia');
    const viewReceitasForm = document.getElementById('view-receitas-form');
    
    // Botões de Ação
    const btnNovaReceita = document.getElementById('btn-nova-receita');
    const btnAddPrimeira = document.getElementById('btn-add-primeira');
    const btnCancelar = document.getElementById('btn-cancelar');

    // Função para esconder todas as views
    function hideAllViews() {
        viewDashboard.style.display = 'none';
        viewReceitasVazia.style.display = 'none';
        viewReceitasForm.style.display = 'none';
    }

    // Função para remover 'active' dos links
    function removeActiveNav() {
        navDashboard.classList.remove('active');
        navReceitas.classList.remove('active');
    }

    // Clique em Dashboard (Imagem 1)
    navDashboard.addEventListener('click', (e) => {
        e.preventDefault();
        removeActiveNav();
        hideAllViews();
        navDashboard.classList.add('active');
        viewDashboard.style.display = 'block';
    });

    // Clique em Receitas (Imagem 2)
    navReceitas.addEventListener('click', (e) => {
        e.preventDefault();
        removeActiveNav();
        hideAllViews();
        navReceitas.classList.add('active');
        viewReceitasVazia.style.display = 'block';
    });

    // Clique em "Nova Receita" ou "Adicionar Primeira" (Imagem 3)
    const showForm = (e) => {
        e.preventDefault();
        hideAllViews();
        viewReceitasForm.style.display = 'block';
    };

    btnNovaReceita.addEventListener('click', showForm);
    btnAddPrimeira.addEventListener('click', showForm);

    // Clique em Cancelar no formulário (Volta para lista vazia)
    btnCancelar.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('form-receita').reset();
        document.getElementById('file-preview').style.display = 'none';
        hideAllViews();
        viewReceitasVazia.style.display = 'block';
    });
    
    // Impedir recarregamento ao enviar o formulário
    document.getElementById('form-receita').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Receita salva com sucesso! (Simulação)');
        e.target.reset();
        document.getElementById('file-preview').style.display = 'none';
        hideAllViews();
        viewReceitasVazia.style.display = 'block'; // Poderia ir para uma lista preenchida
    });

    // Lógica para Tirar Foto e Anexar Imagem
    const btnFoto = document.getElementById('btn-foto');
    const btnAnexo = document.getElementById('btn-anexo');
    const inputCamera = document.getElementById('input-camera');
    const inputGallery = document.getElementById('input-gallery');
    const filePreview = document.getElementById('file-preview');
    const fileNameSpan = document.getElementById('file-name');

    const handleFileSelect = (input) => {
        if (input.files && input.files[0]) {
            fileNameSpan.innerText = input.files[0].name;
            filePreview.style.display = 'block';
        }
    };

    if (btnAnexo && btnFoto && inputCamera && inputGallery) {
        btnAnexo.addEventListener('click', () => inputGallery.click());
        
        btnFoto.addEventListener('click', () => inputCamera.click());

        inputCamera.addEventListener('change', () => handleFileSelect(inputCamera));
        inputGallery.addEventListener('change', () => handleFileSelect(inputGallery));
    }

    // Redirecionamento para a página de estoque ao clicar em um remédio
    const linkarRemedios = (seletor) => {
        document.querySelectorAll(seletor).forEach(item => {
            item.style.cursor = 'pointer';
            item.addEventListener('click', (e) => {
                if (e.target.closest('.actions')) return; // Não redireciona se clicar em editar/excluir
                const nome = item.querySelector('h3, h4').innerText.toLowerCase();
                window.location.href = `paginas/estoque.html?remedio=${nome}`;
            });
        });
    };

    linkarRemedios('.remedio-item');
    linkarRemedios('.dispenser-card');
});