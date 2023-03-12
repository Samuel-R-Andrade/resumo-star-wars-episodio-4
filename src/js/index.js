// 1 - Dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// 2 - Dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // 3 - Desmarcar o botao anterior
        desativarBotaoSelecionado();

        // 4 - Marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // 5 - Esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // 6 - Fazer aparecer a imagem de fundo corresponde ao botão clicado
        imagens[indice].classList.add('ativa')
    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

