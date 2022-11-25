//      Exercicio For.

const elementos = [
    {tag: 'p', texto: 'Qualquer texto que voce quiser.'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
]; //Array com cada tag que vai ser criada no site

const container = document.querySelector('.container');//Pegar o elemento "container" no HTML.
const div = document.createElement('div'); //Cria o elemento "div"

for (let i = 0; i < elementos.length; i++) { //For para pecorrr o Array elementos.
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);//Criando elementos
    tagCriada.innerHTML = texto;//Juntando com o HTML
    div.appendChild(tagCriada);
}

container.appendChild(div); 