// Break e Continue dentro dos laços, isso vai permitir que vc tenha controle de quando por exeplo pular um elemento, ele quebrar o laço a qualquer momento que vc quiser
// Break e Continue funcionam em todos os laços anteriores: For ,While , Do While

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue;
    }//Pular o código dentro da interação, por exemplo eu não quero exibir o número dois quando for executado isso, então eu posso utilizar a palavra "continue"
    //Sempre que vc encontra a palavra "continue" ele pula para a próxima interação do lado
    // A gente sempre vai querer colocar essa palavra antes de executar a ação.
    // Podemos fazer vários continue dependendo do que a gente tiver.
    console.log(numero);

    if (numero === 7 ) {
        console.log('7 encontrado, saindo...');
        i++;
        break;
    }// Se eu achar o número 7 aqui, então não preciso mais executar o código, ele vai sairdo laço e não precisa mais utilizar nada.
    //Na hora que ele encontrar a palavra "Break" ele vai parar o laço ali naquele momento
    
    i++; 
}

// Continue continua para a próxima iteração
// Break sai do laço







