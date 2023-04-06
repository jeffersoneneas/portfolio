const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        const targetTop = target.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
        });
    });
});

// seleciona o botão de voltar ao topo
const btnTopo = document.querySelector('#btn-topo');

// adiciona um evento de clique ao botão
btnTopo.addEventListener('click', function () {
    // faz a rolagem suave até o topo da página
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// adiciona um evento de rolagem à página
window.addEventListener('scroll', function () {
    // verifica a posição atual da página
    const posicaoAtual = window.pageYOffset;

    // se a posição atual for maior do que 500px, exibe o botão
    if (posicaoAtual > 500) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});
