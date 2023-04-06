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


const btnTopo = document.querySelector('#btn-topo');


btnTopo.addEventListener('click', function () {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


window.addEventListener('scroll', function () {

    const posicaoAtual = window.pageYOffset;

    if (posicaoAtual > 500) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});
