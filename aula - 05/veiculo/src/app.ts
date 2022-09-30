import { Caminhao } from "./caminhao";
import { Moto } from "./moto";
import { Veiculo } from "./veiculo";

let carro: Veiculo = new Veiculo(100);

console.log(carro.mostrarVelocidadeMaxima());
console.log(carro.acelerar(120));

let caminhao: Caminhao = new Caminhao(80);
console.log(caminhao.acelerar(80));

let moto: Moto = new Moto(70);

moto.cor = 'preta';
moto.fabricante = 'Honda';
moto.modelo = 'CB300';