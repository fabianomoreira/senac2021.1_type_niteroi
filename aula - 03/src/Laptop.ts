class Laptop {
    tela: number;

    constructor(tela: number){
        this.tela = tela;
    }

    ligarMonitor(){
        console.log('O monitor foi ligado');
    }
}

let computador = new Laptop(21);
console.log(computador.ligarMonitor());

class Lenovo extends Laptop {
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor} pontos`);
    }
}

let lenovo = new Lenovo();

lenovo.ligarMonitor();
lenovo.aumentarBrilho(3);

interface Gamer{
    memoriaVideo: number;
}

class Sansumg extends Laptop implements Gamer{
    memoriaVideo: number = 512;
    
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor} pontos`);
    }    
}