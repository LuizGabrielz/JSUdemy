// ForEach
// Uma forma diferente de inteirar sobre array
// O forEach só será intregado dentro do array

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
a1.forEach(function(valor, indice, array) { // Ele vai pegar cada elemento que está nos paramentros da função e retornar
    console.log(array[indice]);
});

// Simulação de Reduce
const a2 = [10, 20, 30];
let total = 0;

a2.forEach(valor => {
    total += valor;
});
console.log(total); 