import { Laptop } from "./computador-base";

export class Lenovo extends Laptop {
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor} pontos`);
    }
}
