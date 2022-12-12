// Revisando Objetos

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio'
}; // Objeto que vai retornar os valores dentro

console.log(pessoa[nome]);
console.log(pessoa[sobrenome])

// Da mesma maneira da pra fazer assim
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Gabriel';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

const pessoa2 = {
    nome: 'Gabriel',
    sobrenome: 'Pinheiro'
}; 
delete pessoa2.nome; // Deleta o nome do obj
console.log(pessoa2);

// Métodos são funções dentro do objeto que executam ações 
pessoa2.falarNome = function() {
    return (`${this.nome} está falando seu nome.`)
};
pessoa2.falarNome();


function criaPessoa(nome, sobrenome) {  // Isso é uma factory function
    // Função para criar pessoas dentro de um objeto sem ser cada um de cada 
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto);

// Constructor Function
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const Pessoa2 = new Pessoa('Luiz', 'Miranda'); // Não pode esquecer da palavra "New"

// Criar um array que não pode ser alterado 
Object.freeze(this); 