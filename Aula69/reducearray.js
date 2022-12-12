// Reduce - Reduzindo o array
// Reduce é uma função que ela é mais utilizada para reduzir um Array a um único elemento
// É mais interessante pra reduzir um Array a um único elemento

// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) { // Função para somar todos os números
    console.log(acumulador);
}, 0); 

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array) { // Função para retornar com números pares
//  if(valor % 8 === 0) acumulador.push(valor);
//  return acumulador;
// }, []);
//)

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor
// if(valor % 2 !== 0) {
// acumulador += valor;
//}
// return acumulador;
// }, 0); 


// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 }, 
    { nome: 'Maria', idade: 23 }, 
    { nome: 'Eduardo', idade: 55 }, 
    { nome: 'Leticia', idade: 10 },
    { nome: 'Rossana', idade: 64 }, 
    { nome: 'Wallace', idade: 63 }, 
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador; // Função para retornar a pessoa mais velha do obj e reduzir o array mostrando apenas uma coisa
    return valor;
});

console.log(maisVelha);   
