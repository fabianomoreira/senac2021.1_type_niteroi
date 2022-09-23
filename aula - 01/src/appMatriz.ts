let nomes: Array<string> = ['Matheus', 'Beatriz', 'Arian'];
let numeros = [2, 5, 6, 9];

console.log(nomes[1]);
console.log(numeros[2]);

nomes.forEach((x) => {console.log(x)});

numeros.forEach((valor) => {
    if(valor == 9){
        console.log('Este valor é proibido!');
    }

    console.log('Valor lido ' + valor);
});