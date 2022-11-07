//Objetos(Básico)
//No js eu posso criar os meus própios objetos usando o {} 
//No objeto vc não precisa colocar const ou let, basta colocar o nome que e o valor.

const pessoa1 = {
   nome: 'Luiz' ,
   sobrenome: 'Miranda',
   idade: 25 
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome); //Retorna os resultados dos objetos que estão dentro da pessoa1;

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};

//Para não precisar criar vários objetos, nós podemos chamar uma função para criar.

function criaPessoa (nome, sobrenome, idade) { 
    return { //Quando se tem palavras iguais não precisa dos : o js ja entende oque é pra fazer.
         nome,
        sobrenome,
        idade
    };
}
const pessoa01 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa02 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa03 = criaPessoa('João', 'Moreira', 55);
const pessoa04 = criaPessoa('Junior', 'Lara', 44);
const pessoa05 = criaPessoa('Jean', 'Otávio', 69);
//Aqui nós criamos várias pessoas com a função criaPessoa
console.log(pessoa01.nome, pessoa1.sobrenome);
//Então a gente recebeu 3 parametros aqui e agr estamos enviando argumentos aqui no const.
//Quando eu envio argumentos estamos respondendo o parametro.
//Dessa maneira essa função esta me retornando um objeto inteiro.

//Uma função dentro de um objeto
const pessoa001 = {
    nome: 'Luiz',
    sobrenome: 'Miranda' ,
    idade : 25, 
    
    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`);
    }
};

pessoa001.fala(); 
//Essa função vai retornar o que a pessoa 1 vai falar e está dentro de um objeto e tem que estar dentro das {}
//O this significa esse objeto nesse contexto.