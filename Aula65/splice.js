// Método Splice
// Função que faz tudo

const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
// Nomes.splice(indice, delete, elem1, elem2, elem3) indices do array, o delete e os elementos do array
const removidos = nomes.splice(4, 2);// Vai excluir dois elementos do array e, se nescessário adiciona um elemento no lugar. Retorna os elementos deletados tb
console.log(nomes, removidos);

const removido = nomes.splice(-2, number.MAX_Value);// MAX_VALUE quantos elementos vamos remover, começando do -2
nomes.splice(nomes.length, 0, 'Luiz', 'Otavio', 'Miranda'); //Adiciona um elemento no array.

nomes.splice(0, 0, 'Luiz', 'Otavio'); //Simula o unshift e adiciona dados no array, no caso no índice zero