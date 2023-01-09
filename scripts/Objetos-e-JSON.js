/*const programador = {
  nome: 'Johanne',
  nascimento: '09/06/2003',
  casado: false,
  linguagensFavoritas: ['JavaScript', 'PHP', 'Python'],
  trabalhoDesde: 2023,
};

console.table(programador);
console.log(programador['nome']);
*/
// Classes
class Programador {
  constructor(
    nome,
    nascimento,
    casado,
    linguagensFavoritas = [],
    trabalhoDesde = null
  ) {
    this.nome = nome;
    this.nascimento = nascimento;
    this.casado = casado;
    this.linguagensFavoritas = linguagensFavoritas;
    this.trabalhoDesde = trabalhoDesde;
  }
}
const gabriel = new Programador(
  'Gabriel Froes',
  '04/07/1980',
  true,
  ['JavaScript', 'PHP', 'Python'],
  1996
);

const vanessa = new Programador(
  'Vanessa Weber',
  '27/03/1981',
  true,
  ['Ruby', 'PHP', 'Python'],
  1996
);

for (const propriedade in vanessa) {
  console.log(`${propriedade}: ${vanessa[propriedade]}`);
}
//console.table(gabriel);
//console.table(vanessa);
