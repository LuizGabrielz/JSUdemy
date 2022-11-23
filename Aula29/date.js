//Objeto Date.
//A função Date é uma função construtora
//Para usar o objeto Date vc precisa usar a palavra new Date
//Sempre que falo de new date eu to falando de uma função construtora e ela sempre começa com a letra maiuscula.
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras - umDia);//Sempre que eu executar esse código o js vai criar um novo objeto de data com a data atual
// 01/01/1970 Timestamp unix ou época unix
//console.log(data.toString()); 



//const date = new Date(2019, 3); //a, m, d, h, M, s ,ms(ano, mes, dia, hora, minuto, segundos, milissegundo)
//console.log(date.toString()); 

//dataString : Um valor do tipo String que representa uma data. A string deverá estar em um formato reconhecido pelo método Date.parse()

const data = new Date('2019-04-20 20:20:59')
console.log(data.toString()); 

console.log('Dia', data.getDate());// Data
console.log('Mes', data.getMonth() +1);//Mes // Mes começa do zero
console.log('Ano', data.getFullYear());//Ano
console.log('Hora', data.getHours());//Hora
console.log('Min', data.getMinutes());//Min;
console.log('Seg', data.getSeconds());//Segundos;
console.log('ms', data.getMilliseconds());// Millisegundos
console.log('Dia semana', data.getD());//Dia da semana; // 0 - Domingo, 6 - Sábado
console.log(data.toString());
console.log(Date.now()); //Obtem os milesimos de segundo da data atual

function zeroAesquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAesquerda(data.getDate());
    const mes = zeroAesquerda(data.getMonth() + 1);
    const ano = zeroAesquerda(data.getFullYear());
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    const seg = zeroAesquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`; 

}

const dataa = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);