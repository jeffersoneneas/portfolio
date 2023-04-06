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
