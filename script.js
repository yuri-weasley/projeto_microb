const botaoEditar = document.querySelector('.botaoEditar');
const form = document.querySelector('form');

botaoEditar.addEventListener('click', () => {
    form.classList.toggle('hidden');
})