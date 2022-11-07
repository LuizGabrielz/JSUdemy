//Exercicios com Numbers e Math.

const numero = Number(prompt('Digite um número:')); // O prompt retorna uma string pra a gente, memso nós colocando um número ele retorna uma string.
//Colocando o number antes do prompt, ele transforma a string em um number e com isso consegue fazer a conta.
const numeroTitulo = document.getElementById('numero-titulo'); //Aqui nós estamos falando para o js pegar o id que está no html para usar aqui.
const texto = document.getElementById('Texto'); // Pegamos outro elemento por id.

numeroTitulo.innerHTML = numero; // Agora o que a pessoa digitar no site o número fica dentro do título pq a gente alterou o id.
texto.innerHTML = '';  
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`; // Vou usar `` pq vou fazer uma conta.
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredonda para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;
   