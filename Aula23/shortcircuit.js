//Avaliação de Curto - Circuito (short circuit)

/* 
&& -> Vai retornar o valor falso// Todas as expressões precisam ser verdadeiras para que o and retorne verdadeiro
|| -> Vai retornar o valor verdadeiro
// Valores que avaliam em falso em js:
FALSY
false
0
'' "" `` - String vazia.
null / undefined - Não aponta pra lugar nenhum.
NaN
*/

//false && true -> false - No momento que eu encontrar a expressão false, ele ja vai me retornar o false e mais nada depois do And.
// o valor mesmo.
console.log('Luiz Otávio' && true && 'NaN'); //Ele vai checar as tres e mostrar a falsa

//Em js tudo pode ser avaliado ou em verdadeiro ou em falso

function falaOi () {
    return 'Oi';
}

const vaiExecutar = 'Joãozinho';

console.log(vaiExecutar && falaOi()); // Vai retornar undefined pq não é uma string vazia.
                                    // Se fosse false ia retornar false 


// o OR responde apenas o verdadeiro ||    