import { Veiculo } from "./veiculo";

export class Caminhao extends Veiculo {
    tamanhoCacamba: number;

    descarregar(): void {
        console.log('descarregando...');
    }
}