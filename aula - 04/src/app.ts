import { Laptop } from "./computador-base";
import { Lenovo } from "./lenovo";

let computador = new Laptop(21);
console.log(computador.ligarMonitor());

let lenovo = new Lenovo();

lenovo.ligarMonitor();
lenovo.aumentarBrilho(3);
