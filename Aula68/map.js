// Map - Mapeando o array
// Totalmente similar a o que o filter faz, a unica diferença é o retorno final
// A map altera os valores do meu Array
// Altera os valores do Array original para usar em um novo Array

// Dobre os números

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2); // Função para multiplicar os valores do Array por dois
console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do obj
// Adicone uma chave id em cada obj

const pessoas = [
    {nome: 'Luiz', idade: 62 },
    {nome: 'Maria', idade: 23 },
    {nome: 'Eduardo', idade: 55 },
    {nome: 'Leticia', idade: 19 },
    {nome: 'Rossana', idade: 32 },
    {nome: 'Wallace', idade: 47 },
];
const nomes = pessoas.map(obj => obj.nome); // Função para retornar apenas a string, que são os nomes.
console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade})); // Função para retornar apenas a idade do obj
console.log(idades);

const comIds = pessoas.map(function(obj, indice) { // Função para criar uma chave Id para cada objeto no Array
    obj.id = (indice + 1) * 1000
    return obj;
});
console.log(comIds);  

// Outra forma de fazer:

//const comIds = pessoas.map(function(obj, inice) {
//    const newObj = {...obj };
 //  newObj.id = indice;
//return newObj;
//})
//console.log(comIds); 

