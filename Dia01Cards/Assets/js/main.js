// Seleciona todas as imagens
const imagens = document.querySelectorAll('img');

// Adiciona o evento de clique a cada imagem
imagens.forEach((imagem) => {
    imagem.addEventListener('click', (e) => {
        const el = e.target;
        novaClasse();
        el.classList = 'card-grande';
    });
});

// Função para atualizar as classes das imagens
function novaClasse() {
    imagens.forEach((imagem) => {
        imagem.classList = 'card-pequeno';
    });
}
