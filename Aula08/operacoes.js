//Operações Aritméticas, de atribuição e incremento.
//Todos eles vão fazer uma operação ou uma concatenação com o sinal de +

/**
 * + Adição / Concatenação
 * - / * - Faz a subtração. * - Faz a divisão.
 *  ** - Faz a potenciação sempre que quer elevar o número a outro número a gente faz isso
 *  % Retorna o resto da divisão 
 */
const num1 = 5; //Se colocassemos aspas seria string e faríamos a concatenação, que é unir dois valores
const num2 = 10; 
console.log(num1 + num2); 

let contador =1;
contador++;// isso siginifica que eu estou falando que a variável tenha o valor dela mais um
contador++; //3
console.log(contador)
//Pode ser usado tanto pró quanto pré(++ antes do contador ou depois).
//Sempre que precisar usar o contador, usar a variável let.
//Também pode ser usado -- para diminuição. (contador --).


/*
Incremento operadores ++
Decremento operadores --
*/

let contado = 0; // aqui o contador é zero
contador +=2; // contador = contador + 50
//Cada vez que eu duplicar isso aqui, vai contar de dois em dois.

//parseInt(pede para alguma ação ser executada) como por exeplo converter uma string para um number. ou outro comando.
//parseFloat analisa as casas decimais. exemplo('5,2');
// NaN - Not a number
// parseInt (inteiro)
//parseFloat(decimais)
