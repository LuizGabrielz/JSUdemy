//Funções(Básico);

//Funções executam ações, sempre que vc ouvir a palavra função imagine que vc quer mandar um valor para ele e depois retornar o valor.
//Para criar uma função vc usa a palavra function e dar o nome das funções que é o mesmo nome das variáveis, é a mesma regra. Abre o () e colcoa o corpo com {}

function saudacao(nome) { //nome é o paramentro da função que vai ser chamada.
    return `Bom dia ${nome}!`; //Vai retornar o Bom Dia!
}

const variavel = saudacao('Luiz'); //Chama a função.
//Aqui ele chama o nome da função.
console.log(variavel); 
//Dentro da função eu posso colcoar quantas linhas de código que eu quiser e ele esta sendo protegido pelo {}

function soma(x, y) {
    const resultado = x + y; 
    return resultado;
}
const resultado = soma(4, 2);
console.log(resultado)//Maneira de retornar o resultado.

console.log(soma(2, 2));//Outra maneira de retornar o resultado.
console.log(soma(3, 1));
console.log(soma(5, 10)); 
//Função de soma acima. 
//No js vc vai ter um monte de funções que conversam entre si, trocam dados entre si e fazem ações.
//A partir do momento que a função encontra o return, nada depois da função será executada.
//Só vou ter um valor se eu enviar o valor de x e y.

//Outra maneira de criar funções
const raiz = function(n) {
    return n ** 0.5;
}; 

console.log(raiz(9)); //Retorna a raiz que a função chamou.

//Outra maneira de fazer função é com a arrow function que ao inves de usar a palavra function nós usamos o simbolo =>

//const raiz n => n ** 0.5; Se fizer essa linha toda, ainda é uma função.

//As arrow function vieram para facilitar a vida do programador.quando eu tenho uma linha nessa função eu posso eliminar as chaves, eliminar a palavra return também e quando se tem só um paramentro na função eu posso também eliminar os parenteses.




