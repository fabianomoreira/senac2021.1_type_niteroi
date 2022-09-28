let valor = () => {
    return Math.floor((Math.random() * 60) + 1);
};

function sortear(): Array<number>{
    let numeros: Array<number> = [];
    let x: number;

    for(let i = 0; i < 6; i++){
        x = valor();

        if(numeros.indexOf(x) == -1){
            numeros.push(x);
        } else {
            i--;
        }
    }

    numeros.sort((n1, n2) => n1 - n2);

    return numeros;
}