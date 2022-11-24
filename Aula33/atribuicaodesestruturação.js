// Atribuição via desestruturação (Arrays)

let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras; //Array com letras.

console.log(a, b, c); // O valor de letras.

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero); //Pega o primeiro e o segundo valor do array
console.log(resto);//O resto vai pegar os outros valores que estão dentro do array, pq só estamos chamando o primeiro e o segundo

//...rest, ... spred 
//                  0           1           2
//               0  1  2    0  1  2    0  1  2
const numero = [[1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numero;
console.log(lista3[2]);// Vai chamar os itens da lista número 3.

console.log(numeros[1][2]);

