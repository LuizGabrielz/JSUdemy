// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');
//Adiciounou um evento de submit no formulário
form.addEventListener('submit', function (e) {
    e.preventDefault(); //Preveniu o default, nao deixamos o form ser enviado
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return; //Se o peso não for avaliado como verdadeiro, retorna peso invalido
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return; //Se a altura naõ for avaliado como verdadeiro, retorna altura invalida
    }

    const imc = getImc(peso, altura); //Criamos uma função especifica para calcular o imc
    const nivelImc = getNivelImc(imc);//Pegamos o texto do imc e também demos uma função especifica para ele

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;//Criamos a nossa mensagem com os valores aqui

    setResultado(msg, true);//Mandamos setar o resultado agr com a flag true para colocar a nossa classe verdadeira 

});  

function getNivelImc (imc) {//Fizemos um getNivelImc para criar uma lista de coisas 
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) { //E aqui baseado no Imc que a gente vai fazer nessa função, a gente consegue fazer alguma coisa
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    }

    if (imc >= 24.9) {
        return nivel[2];
    }

    if (imc >= 18.5) {
        return nivel[1];
    }

    if (imc < 18.5) {
        return[0]
    }
}

function getImc (peso, altura) {//Fizemos a função getImc que só faz o calculo do Imc
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function criaP () {//Função que só cria o paragrafo
    const p = document.createElement('p');
    return p;

} 

function setResultado (msg, isValid) {//Função que seta o resultado. Ela recebe uma mensagem e se esse resultado é válido 
    const resultado = document.querySelector('#resultado');
   resultado.innerHTML = ''; //Então aqui dentro a gente selecina nossa div de resultado, zera o html daquele resultado

   const p = criaP();//Cria um p com a nossa função la em cima, cria p

   if (isValid) {//E ai a gente checa se nossa flag for verdadeira ou falsa baseada nela
    p.classList.add('paragrafo-resultado');//Se for verdadeira significa que é válido, então essa classe é a que tem o fundo verde.
   } else {
    p.classList.add('bad');//Se for falso siginifica que não é valido, então a classe é bad
   } 

   p.innerHTML = msg;// E aqui a gente seta o innerHTML com uma mensagem que a gente ta recebendo aqui.
   resultado.appendChild(p);// E por fim adiciona esse paragrafo no nosso resultado
}

  