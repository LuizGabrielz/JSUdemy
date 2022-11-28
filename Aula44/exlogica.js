// Escreva uma função chamada ePaisagem que
// recebe dois argumentos, largura e altura
// de uma imagem (number)
// Retorne true se a imagem estiver no modo
// paisagem

function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
    // Se vc quiser retorar pra verdadeiro vc pode colcoar => 
}

console.log(ePaisagem(1080, 1920)); 


//Outra forma de fazer abaixo
const ePaisagem = (largura, altura) =>
    largura > altura;

    console.log(ePaisagem(1920, 1920)); 