import { Laptop, Gamer } from "./computador-base";

class LenovoX extends Laptop implements Gamer{
    memoriaVideo: number = 512;
    
    constructor(){
        super(21);
    }

    aumentarBrilho(valor: number){
        console.log(`Brilho subiu ${valor} pontos`);
    }    
}