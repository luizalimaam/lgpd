// Adiciona um ouvinte de eventos ao documento para executar a função quando todo o conteúdo do DOM estiver carregado.
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona todos os links dentro de um elemento 'nav' que contém listas 'ul' com itens 'li'.
    const menuLinks = document.querySelectorAll('nav ul li a');

    // Adiciona um ouvinte de eventos de rolagem na janela.
    window.addEventListener('scroll', function () {
        // Obtém a posição atual de rolagem vertical da janela.
        let fromTop = window.scrollY;

        // Itera sobre cada link obtido anteriormente.
        menuLinks.forEach(link => {
            // Seleciona o elemento da seção correspondente ao 'href' do link, que deveria ser um id de seção.
            let section = document.querySelector(link.hash);

            // Verifica se a posição de rolagem está dentro do intervalo da seção atual.
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                // Adiciona a classe 'active' ao link se a seção correspondente estiver na janela visível.
                link.classList.add('active');
            } else {
                // Remove a classe 'active' se não estiver no intervalo visível.
                link.classList.remove('active');
            }
        });
    });
});