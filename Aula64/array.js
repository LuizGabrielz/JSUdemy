// Revisão do básico em Arrays
// Valor por referencia

const nomes = ['Eduardo', 'Maria', 'Joana']; // Básico do array
nomes[2] = 'João'; // Substitui o nome "Joana" por "João"
delete nomes[2]; // Deleta o nome dois, que seria "João" <1 empty item>
console.log(nomes); // Chama o array

// Isso funciona para String, Objetos, Funções, Números 
// Posso também fazer o array dessa forma, com a palavra "new Array" e com os ()

const nomes = new Array('Eduardo', 'Maria', 'Joana'); // Funciona da mesma forma.
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);

nomes.pop //Remover um elemento do Array. Sempre apaga o ultimo elemento.
const removido = nomes.pop(); // Também remove elementos
console.log(nomes, removido);

nomes.shift //Remove o elemento do começo
nomes.push('João'); // Adicona elementos no Array
nomes.push('Wallace');

nomes.unshift('João'); //Adiciona no começo do Array, substituindo o índice 0
nomes.unshift('Wallace');

nomes.slice; // Fatia o Array 
const novo = nomes.slice(1, 3); // Vai mudar os índices de lugar

const nomes = [ 'Luiz', 'Otavio', 'Miranda' ]; // Usado para String
const nome = nomes.join(' , '); // Usado para unir o elemento do array que é uma string. Posso tb colocar uma vírgula para o separador
console.log(nome) 