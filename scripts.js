const myInput = document.getElementById('input');

console.log(myInput);

myInput.addEventListener('focus', () => {
  const div_busca = document.getElementById('busca');

  div_busca.classList.add('shadow');
});

myInput.addEventListener('focusout', () => {
  const div_busca = document.getElementById('busca');

  div_busca.classList.remove('shadow');
});

// querySelector => Uma lista de objetos
// getElementById => Retorno somente um objeto