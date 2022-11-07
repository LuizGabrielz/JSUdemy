//Objeto Math 
//Em javaScript a gente tem um objeto ja disponibilizado pela própia linguagem que é chamado de Math.          

let num1 = 9.54578; //Digamos que eu queira arrendodar esse número para baixo
let num2 = Math.floor(num1); //Arredondar esse número para baixo.
console.log(num2);

let num3 = Math.ceil(num1); // Arredonda esse número para cima.
console.log(num3); 

let num4 = Math.round(); // O valor vai ser arredondado para o número mais próximo.
console.log(num4);

console.log(Math.max(1,2,3,4,5, -10, -50, 1500,9,8,7,6)); // Vai pegar o maior número dessa sequencia.
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Menor número dessa sequencia.
console.log(Math.random()); // Gerar um número aleatório.
 