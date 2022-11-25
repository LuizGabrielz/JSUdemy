// For in - Estrutura de repetição.
// For in => le os índices ou chaves do objeto
const frutas = ['Pera', 'Macã', 'Uva'];
for (let i = 0; i < frutas.length; i++) { //Uma maniera de fazer que nós ja vimos antes.
    console.log(frutas[i])
}
for (let indice in frutas) {
    console.log(frutas[indice]);// Indice de do Array frutas
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let chaves in pessoa) {
    console.log(chaves); // Aqui nós estamos acessando as chaves do objeto pessoas.
};//Isso vale a cada chave do objeto.

console.log(pessoa.nome);
console.log(pessoa['nome']);    