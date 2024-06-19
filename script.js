const botaoEditar = document.querySelector('.botaoEditar');
const form = document.querySelector('form');

botaoEditar.addEventListener('click', () => {
    form.classList.toggle('hidden');

    const corpo = document.querySelector('body')
    corpo.style.backgroundColor.opacity = '0.5';
})