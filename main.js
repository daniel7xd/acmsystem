const addloading = () => {
  const button = document.querySelector('button[type="submit"]');
  button.innerHTML = 'Enviando dados...';
}

const remloading = () => {
  const button = document.querySelector('button[type="submit"]');
  button.innerHTML = 'Enviar';
}

const handleSubmit = (event) => {
  event.preventDefault();
  addloading();

  const nome = document.querySelector('input[name="nome"]').value;
  const telefone = document.querySelector('input[name="telefone"]').value;
  const responsavel = document.querySelector('input[name="responsavel"]').value;
  const itens = document.querySelector('textarea[name="itens"]').value;

  fetch('https://api.sheetmonkey.io/form/956cQNM6oexvyoPDFqY82k', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({nome, telefone, responsavel, itens})
  }).then(remloading())
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
}

document.querySelector('#form-cadastro').addEventListener('submit', handleSubmit);
