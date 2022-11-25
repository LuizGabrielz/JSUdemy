// For of - Estrutura de repetição
// Esse "For" é especifico para objetos interaveis, strings ou arrays que tem indices e a gente pode inteirar entre eles

const nome = 'Luiz Otávio';

for (let i = 0; i < nome.length; i++ ) {
    console.log(nome[i]); // Aqui vai setar cada letra do nome
}

for (let valor of nome) {
    console.log(valor);
}

console.log('####');

nome.ForEach(function(valor, indice){
    console.log(valor, indice);
}) 

// For clássico - Geralmente com interáveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

 