// Efeito de scroll no cabeçalho
window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '1rem 2rem';
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '1.5rem 2rem';
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    }
});

// Simulação de clique nos botões
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Botão clicado! Implementar ação desejada.');
    });
});