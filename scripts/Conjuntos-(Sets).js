/*
const meuConjunto = new Set();

const times = ['São Paulo', 'Flamengo', 'Fluminense', 'Palmeiras', 'São Paulo'];
const meuCampeonato = new Set(times);

console.table(meuCampeonato);
*/

const meuConjunto = new Set();

meuConjunto.add('Gabriel');
meuConjunto.add('Gabriel');
meuConjunto.add(2022);
meuConjunto.add(true);
meuConjunto.add(true);
meuConjunto.add(['Gabriel', 'Vanessa']);
meuConjunto.add({ nome: 'Vanessa' });
const cdfs = ['Gabriel', 'Vanessa'];
meuConjunto.add(cdfs);

meuConjunto.delete(['Gabriel', 'Vanessa']);

const entradas = meuConjunto.entries();

for (let entrada of entradas) {
  console.log(entrada);
}

/*
const cdfs = new Set(['gabriel', 'vanessa', 'felipe']);

if (!cdfs.has('Bielzinho')) cdfs.add('Bielzinho');

console.table(cdfs);

console.log(cdfs.size);
*/
