//If, else if e else.

/*const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.'); // Estamos checando, se o número está entre 0 e 5, o console ja prever o futuro e fala se é verdade ou falso.
} else {
    console.log('O número NÃO está entre 0 e 5. '); //Vai executar esse código pq não está entre os números.
}*/

//Se a primeira linha for verdadeira, ela é executada. Se não for, a segunda linha é executada.


const numero = 10;

if (numero >= 0 && numero <=5) {
    console.log('O número está entre 0 e 5. ');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 && numero <= 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11. ');
}  

//Vai pulando até encontrar a opção verdadeira, quando encontrar ele para a linha e mostra o resultado.

