// Escreva uma função que recebe 2 números e retorne o maior deles

function max(x, y) {
    return x > y ? x : y; //Outra forma de fazer um if else
}

const max2 = (x, y) => {
    return x > y ? x : y;
}; // Fazendo com arrow function
//Arrow function quando tem só uma linha, então a gente não precisa das chaves.

console.log(max(10, 20)); 

