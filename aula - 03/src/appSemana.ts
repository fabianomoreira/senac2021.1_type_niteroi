let diasDaSemana: Array<string> = ['segunda-feira', 'terça-feira', 'quarta-feira', 
                                   'quinta-feira', 'sexta-feira', 'sabado', 'domingo'];

let semana = (dia: string = 'domingo') => {return dia;};

console.log(`Hoje é ${semana(diasDaSemana[Math.floor(Math.random() * 6)])}`);
console.log(`Hoje é ${semana()}`);