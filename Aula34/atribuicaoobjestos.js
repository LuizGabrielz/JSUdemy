//Atribuição via desestruturação(Objetos)
//Objeto dentro de outro objeto é normal no js

const pessoa = {
    nome: 'Luiz' , 
    sobrenome: 'Miranda' ,
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

console.log(pessoa); 
//Suponha que eu queira pegar só o nome da pessoa, a primeira vista é so colocar(pessoa.nome) e executar.
const nome = pessoa.nome; //Tambem podemos fazer isso, a gente pegou o nome e jogou em uma variável.
//Para a gente fazer a atribuição via desestruturação a gente pode usar as {}
//E ai é a mesma coisa, a gente pode abrir chaves e colocar o valor que a gente quer.
const {name, sobrenome, idade} = pessoa;// Isso é chamado de Atribuição via desestruturação pq eu to passando um objeto e falando pra extrair do objeto o nome.
console.log(nome) 
//Também podemos pegar os valores de tres variaveis.

const { endereco: { rua, numero }, endereco } = pessoa;
console.log(rua, numero, endereco)//Aqui ele vai pegar o endereco mesmo estando em outro objeto.
//E vai mostrar a rua e o número. Se eu quiser tb pegar o endereco, é só colocar a palavra.
//A palavra "resto" tambem pode ser usada em objetos, para retornar tudo que está no objeto.
