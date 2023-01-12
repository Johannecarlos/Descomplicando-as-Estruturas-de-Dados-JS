/*const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'Você');

console.table(meuDicionario);

const palavra = meuDicionario.get('blz');
console.log(palavra);
/*
const meuDicionario = new Map();

const indiceContatos = [
  ['gabriel', '99887766'],
  ['vanessa', '99887766'],
  ['felipe', '77665544'],
];

meuDicionario.set(indiceContatos[0], { nascimento: '04/07/1980' });
meuDicionario.set(indiceContatos[1], { nascimento: '27/03/1981' });
meuDicionario.set(indiceContatos[2], { nascimento: '06/08/2016' });

console.table(meuDicionario);

const vanessa = meuDicionario.get(indiceContatos[1]);
console.table(vanessa);
*/
const meuDicionario = new Map();
meuDicionario.set('oi', 'Oi tudo bem?');
meuDicionario.set('blz', 'beleza');
meuDicionario.set('vc', 'Você');

for (let entrada of meuDicionario.entries()) {
  console.log(entrada);
}

for (let valor of meuDicionario.values()) {
  console.log(valor);
}

for (let chave of meuDicionario.keys()) {
  console.log(chave);
}
