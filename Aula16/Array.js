//Array (Básico) 
//Voce pode imaginar os arrays como uma lista de coleção de coisas, por exemplo vc aprendeu que uma string vc pode colocar um texo
//Se eu quero criar um array eu abro um [] e dentro eu coloco qualquer coisa que eu quiser separado por virgula.
//Se eu quero criar uma lista com nomes, eu posso.
//Posso colcoar qualquer coisa que eu quiser, number, boolean, nulo, funções.
//Os arry também são indexados, mas são diferentes das strings, eles são indexados pelos elementos.
//                 0        1       2
const alunos = ['Luiz', 'Maria', 'João', 1, true, null];
console.log(alunos);
console.log(alunos[0]); //Vai chamar o Luiz, pq ele é o número 0 no Array.
console.log(alunos[2]); //Vai chamar o João pq ele é o número 2 no Array.

alunos[0] = 'Eduardo'; //Isso vai alterar o índice zero do array de Luiz para Eduardo.
alunos[3] = 'Luiza'; //Isso vai adicionar o índice 3no array, que não existe. então vai adicionar.
console.log(alunos); 
console.log(alunos.length);//Se eu quiser saber o tamanho do meu Array.

alunos.push('Fábio'); //Adiciona um elemento no final do meu array.
alunos.unshift('Luiza'); //Vai substituir o primeiro índice do array, no caso o índice 0(zero)
alunos.pop(); //Vai eliminar um elemento do array. 
const removido = alunos.shift(); //Remove no começo do Array.

//Tudo isso altera o indice, eles estão sendo alterados.
console.log(alunos[50]);//Pode acessar um indice quenão existe no array, mas vai retornar undefined. 
console.log(alunos.slice(0,2));//Ele vai andar e retornar o indice do array de número 0 e 2.
console.log(alunos instanceof Array);//Ele retorna uma estancia de array, vai retornar true e dizer que é um objeto.

//Sempre que vc criar um [] é um array e dentro vc pode colocar o que quiser e vai ser um objeto, e pode colocar o que quiser dentro.
//Pode colcoar números, objetos, funções  
