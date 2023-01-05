/*let meuArray = ['Vanessa', 'Gabriel'];
let meuArray1 = new Array();
let meuArray2 = new Array('Gabriel');
console.log(meuArray);
console.log(meuArray1);
console.log(meuArray2);
/*
let meuArray = ['Vanessa', 'Gabriel'];
let meuArray1 = new Array();
let meuArray2 = new Array('Gabriel');
console.table(meuArray);
console.table(meuArray1);
console.table(meuArray2);
*/
let frutas = new Array('Abacaxi');

frutas.push('Banana'); // O método push adiciona valores a um array.
frutas.push('Maçã');
frutas.push('Morango');
frutas.unshift('Tangerina'); // O método unshift() adiciona um ou mais elementos ao início de uma matriz e retorna o novo comprimento da matriz
console.table(frutas);

frutas.pop(); // O método pop remove o último elemento de um array e retorna aquele valor.
frutas.shift(); // O método shift remove o elemento de índice zero, diminui em 1 os indices dos demais valores e retorna o valor removido.
const frutaRemovida = frutas.splice(2, 1, 'Fruta do Conde'); // O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
console.table(frutas);
//console.table(frutaRemovida);
//console.log(frutas.length);
