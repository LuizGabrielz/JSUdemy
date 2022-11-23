//Operação ternária. 
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso' ;
// A operação ternária é simplismente o ? : isso pode diminuir muito o seu código na parte de um if e else, por exemplo.
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário Vip' : 'Usuário normal'
//Essa linha de código aqui é exatamente o que a gente fez em baixo mas diminuido.
const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; 

console.log(nivelUsuario, corPadrao);

//if (pontuacaoUsuario >= 1000) {
  //  console.log('Usuário Vip');
//} else {
  //  console.log('Usuário normal');
//} 