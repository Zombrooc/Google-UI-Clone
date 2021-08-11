const myInput = document.getElementById('input');
const div_busca = document.getElementById('busca');

myInput.addEventListener('focus', () => {
  div_busca.classList.add('shadow');
});

myInput.addEventListener('focusout', () => {
  div_busca.classList.remove('shadow');
});

// querySelector => Uma lista de objetos
// getElementById => Retorno somente um objeto