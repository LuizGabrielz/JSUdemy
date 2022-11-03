/*
Luiz Gabriel Pinheiro tem 28 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.92592592924
Luiz Gabriel nasceu em 1994
*/
const nome = 'Luiz Gabriel'; 
const sobrenome = 'Pinheiro';
const idade = 28;
const peso = 89; 
const alturaEmCm = 1.80;
let imc = 1; //peso / (altura * altura)
let anoNascimento; 

console.log(nome, sobrenome, 'tem', idade,'anos', 'pesa', peso, 'tem', 'kg');
 console.log('tem',alturaEmCm, 'de altura e seu IMC é de', imc);
 console.log(nome, 'nasceu em 1994');
 
imc = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2019 - idade;

// template strings substitui todas as variáveis por ${}