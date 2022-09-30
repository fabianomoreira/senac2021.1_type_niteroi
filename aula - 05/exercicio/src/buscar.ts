export class Buscar{
    existeValor(campo: Array<number>, valor: number): boolean {
        for(let i = 0; i <= campo.length; i++){
            if(campo[i] == valor){
                return true;
            }
        }

        return false;
    }
}
