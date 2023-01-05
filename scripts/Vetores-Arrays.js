//Vetores (Arrays)
/*
const saldoJoao = 3770;
const saldoMaria = 5500;
const total = saldoJoao + saldoMaria;
console.log(total);
/*
const saldoContas = [100, 200, 40, 1.9, 300, 1000, 9.99];
const total = saldoContas.reduce((acumulador, valor) => acumulador + valor);
console.log(total);
/*
const saldoContas = [
  ['Banco 1', 100],
  ['Banco 2', 200],
  ['Banco 3', 40],
  ['Banco 4', 1.9],
  ['Banco 5', 300],
  ['Banco 6', 1000],
  ['Banco 7', 9.99],
];
const total = saldoContas.reduce((acumulador, valor) => acumulador + valor);
console.log(total);
*/
const bandeiras = [
  ['Brasil', ['Verde', 'Amarelo', 'Azul', 'Branco']],
  ['Canadá', ['Vermelho', 'Branco']],
  ['Mexico', ['Verde', 'Branco', 'Vermelho']],
  ['EUA', ['Azul', 'Branco', 'Vermelho']],
];

console.log(bandeiras[2][1][1]);
