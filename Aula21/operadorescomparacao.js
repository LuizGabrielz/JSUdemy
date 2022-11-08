//Operadores de Comparação.
//Ou seja, eles comparam dois valores.
/*
> Maior que / Só checa se o da esquerda é maior que o da direita.
>= Maior que ou igual a / Temos duas comparações e uma delas usa "ou" então se uma delasé verdadeira então vai retornar true ou false.
< Menor que  / Checa se é menor.
<= Menor que ou igual a /Checa se é o número é menor ou igual.
== Igualdade (valor) / Aqui ele vai checar o valor
=== Igualdade estrita (valor e tipo) / Aqui ele vai checar tanto o valor quanto o tipo.
!= Diferente (valor) /Esse aqui checa a diferenca do valor mas ele não checa o tipo.
!== Diferente estrito (valor e tipo) / Esse checa a diferença do valor e do tipo.
*/ 
 //Semore que eu usar qualquer um desses operadores com dois operando o valor vai ser Booleando.
 console.log(10>5);
 const num1 = 10;
 const num2 = 11;  
 const comp = num1 < num2;
 console.log(comp); 
 //Se vc quiser fazer conta faz com Number, não confia que a liguagem vai fazer com String.