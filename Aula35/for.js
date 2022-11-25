//For-Clássico-Estrutura de repetição.
//A estrutura de repetição faz as coisas repetidas, para que a gente não fique repetindo o código ao longo do nosso programa.
//Vamos começar com o For clássico, chamado assim pq várias linguagens de programação interpretam ela da mesma maneira.
//Vamos criar uma estrutura de repetição que faz várias linhas com o For clássico.
//Ele começa com a palavra "For" e ai a gente precisa de tres coisas dentro desses ()
//Essa é a estrutura que vc vai criar para fazer uma estrutura de repetição.
//Dentro do () a gente precisa criar uma variável, criar uma repetição, criar uma condição que vai parar esse laço, e a gente precisa incrementar ou decrementar a nossa variável de controle
//Geralmente a gente chama a variável de controle de i e setar um valor inicial para ela, por exemplo suponha que eu queira representar uma linha que começa do 0 e termina no 5. Então o inicio da variável tem que começar no 0, e para dividir as expressões eu uso ; dentro dos parenteses.
//Temos que colocar uma condição para falar quando esse For vai parar. Para isso a gente vai falar i <= 5
//Então a gente ja sabe que ela se inicia no 0 e termina no 5.
// i significa "index" por isso a gente usa o i. É padrão, todo mundo utiliza isso.
//Agora temos que fazer essa variável chegar a 5 pq no momento ela está em zero.Para isso a gente incrementa o i++ então a gente ta falando que a cada volta que a gente de o i vai incrementar mais 
//Se colocasse 500 ele ia fazer isso ate chegar no 500, então a gente está controlando com a variável "i"
for (let i = 0; i <= 5; i++) {// O js vai executar essa estrutura como um looping até que essa condição passe a ser avaliada como falsa. Sempre que ela for avaliada como verdadeira, ele vai continuar essa repetição aqui.
    console.log(`Linha ${i}`); //Então ele vai imprimir e quando chegar no 5, ele vai parar 
} //Não tem ; no final
//Se eu quiser diminuir, colocar em decrescente, é só colcoar o símbolo de menor >= e ai ao onves de incrementar eu vou decrementar colocando o sinal de "-" tb.
//Posso fazer repetições da maneira que eu quiser, de frente pra tras, de tras pra frente, de um em um.

for (let i = 0; i <=10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par); 
} //Essa é uma estrutura para ver se o número é par ou impar.

//Outra coisa que podemos fazer é pecorrer um array com o for
const frutas = ['Maçã', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length; i++) {//Vai pecorrer todo array. mas não coloca o = pq a gente quer que pare no final do array. 
    console.log(`Índice ${i}`, frutas[i])//Executando isso a gente tem 0,1,2.
}  
console.log(frutas.length)//length para a gente saber o tamanho do Array

