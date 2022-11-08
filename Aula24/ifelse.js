//If, Else. if e else(1)
//Para desviar o fluxo da nossa alicação quando nescessário.

/*const hora = 10;

if (hora <= 12) {
    console.log('Bom Dia'); //Se a hora for menor que 12, fale bom dia.
                            //Se for mais de 12, ele não vai retornar essa mensagem.
} else if () { //Se a condição a cima for falso, criamos m else para colocar outra condição

}
*/


const hora = 50;

if (hora>= 0 && hora <= 11) {
    console.log('Bom Dia');
} else if (hora >= 12 && hora <= 17 ) {
    console.log('Boa Tarde');
} else if (hora>= 18 && hora <= 23) {
    console.log('Boa Noite');
} else {
    console.log('Olá');
}

//If pode ser usado sozinho
//Sempre que utilizo a palavra else, preciso de um if antes.
//Eu posso ter vários else ifs na checagem.
//Só posso ter um else na checagem.
//Podemos usar condições sem else if, utilizando apenas if e else.

const tenhoGrana = true;

if (tenhoGrana) {
 
    console.log('Vou sair de casa');
} else {
    console.lof('Não vou sair de casa');
}  // Se eu não tiver dinheiro eu elimino o else. 


/*
else {
    //Eu não posso fazer isso. Isso não existe. Eu preciso de um bloco if antes.
} */ 
