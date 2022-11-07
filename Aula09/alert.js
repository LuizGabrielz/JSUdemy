//Alert, confirm e prompt (Navegador)

//Window.alert('Mensagem') - Exibe uma mensagem de alerta em cima do site.
//Window.confirm('Deseja realmente apagar?') - Exibe uma mensagem de confirmaçao no topo do site.
//Se vc clicar em cancelar, ele vai ficar um valor boolean false. Se apertar em confirmar, vai aparecer um valor boolean verdadeiro.
//Window.prompt('Digite o seu nome) - Vai abrir uma caixa com o input de texto para o usuário digitar algo.
// Undefined quer dizer que o alert que vc colocou não aponta para lugar nenhum na memória

let num1 = prompt('Digite um Número');
let num2 = prompt('Digite outro Número');

num1 = Number(num1);
num2 = Number(num2);  

alert(`O resultado da sua conta foi: ${num1 + num2}`);  

//Exercicio feito com HTML e JS. Abrir site para ver o código. 