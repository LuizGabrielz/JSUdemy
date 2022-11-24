//Mais diferenças entre var e let/ const.
//Let cria variável e var tb faz a mesma coisa.
//Não posso redeclarar a variável let, mas sim o var

const verdadeira = true;

// Let tem escopo de bloco {...} 
// Var só tem escopo de função
let nome = 'Luiz'; //Estamos criando, e não redeclarando
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio'; // criando dentro desse bloco {} 
    var nome2 = 'Rogério'; // redeclarando

     if (verdadeira) {
        var nome2 = 'Ronaldo'; // redeclarando
        let nome = 'Outra coisa';
        console.log('OK'); 
     }
}

console.log(nome, nome2); 