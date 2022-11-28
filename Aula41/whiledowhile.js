// While e Do While - Estrutura de Repetição.
// A diferença para o For é a seguinte, a gente geralmente não sabe quantas vezes esse laço vai ter que ocorrer ate que o laço termine.
// Vamos usar o let pq vamos precisar mudar a variável de controle.

let i = 0;

while (i <= 10) { //Estrutura while: Dentro do parenteses tem a condição e dentro das chaves tem o que eu preciso realizar.
    console.log(i);
    i ++ //Se não colocarmos i++ vai criar um laço infinito
 }// Vai repetir ate chegar a 10, que foi a condição que colocamos.

 function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
 }

 let rand = random(1, 50);

 while (rand !== 10) { //Não sabemos exatamente quando a condição vai terminar, então nós vamos executando ate algum momento sair da verdadeira, e quando for falso vai mostrar a condição.
    
    rand = random(min, max);
    console.log(rand)
 }

 //A diferença do While e Do While é que o While checa a condição e depois executa o código
 //Já o do While ele vai executar o código primeiro e depois vai checar a condição.

 do {
    rand = random(min, max);
    console.log(rand);
 } while(rand !== 10); 

 //O do While primeiro ele atualizou o valor da função e depois de ele executar o código, ele checou a condição. Isso quer dixer que o rand era 10 mas na hora que ele usou a função para atualizar o valor, antes de executar a condição ele mudou o valor da variável e passou a ser qualquer valor randonico aqui.
 // O do while executa o código pelo menos uma vez sempre 

