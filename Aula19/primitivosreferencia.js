// Valores primitivos e valores por referencia.
//Quando a gente ta falando de dados primitivos, nos estamos falando do valor.

//Primitivos (imutáveis isso quer dizer que não podem mudar) - string, number, boolean, undefined, null (bigint, symbol) - valores copiados.

let a = 'A';
let b = a; // Quando eu so um dado primitivo eu estou fazendo uma cópia.
console.log(a, b);//Aqui tanto A quanto B recebem o valor 'A' 

a = 'Outra coisa';//Seu fizer isso, a gente vai ver que somente o valor de A vai ser alterado. O valor de B vai continuar sendo A.
console.log(a, b);
//Isso aqui é basicamente cópia, eu copiei 

//Referencia (mutável) - Esse tipo de dado por referencia geralmente é mutável, então a gente pode mudar esse valor aqui 
//Nele nós vimos array, object, function - Passados por referencia.
let c = [1,2,3];
let d = c; //Nesse caso tanto d quanto c apontam para o mesmo lugar na memória. 
//Nesse caso eu não estou copiando   