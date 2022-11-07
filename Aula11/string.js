//Mais sobre Strings:

//Se vc tiver uma string com aspas simples ' ' vc pode colocar aspas dupas sem problema nenhum ""
// As string são indexadas
//               01234567
let umaString = "Um texto"; 

console.log(umaString[4]);//Se eu quiser ver o caractere que está no indice 4, eu posso colcoar o [] no console.log.
//Nesse momento eu to pegando apenas o indice 4 do texto.Se pegar um número que nao existe vai dar undefined

console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia.`);
//Tres formas de fazer  

console.log(umaString.indexOf('texto')); // O index texto começa no número 3.

console.log(umaString.lastIndexOf('o', 3)); //Mostra em que número termina a String.

console.log(umaString.length); //Conta a quantidade de letras que existe na String.

