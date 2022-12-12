// Concatenando arrays
const a1 =  [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz'); // Uma maneira de juntar os arrays a1, a2, e mais um array dentro, junto com uma string com o nome Luiz
console.log(a3)

// Outra forma de fazer a concatenação é com o spread, que são esses pontinhos "..."
const atres = [...a1, 'Luiz', ...a2, ...[7, 8 , 9]];
console.log(atres);// Que seria o a3 mas ia dar errado pq tinham nomes iguais
// Não utilizar o sinal de + com dois arrays pq dar errado.