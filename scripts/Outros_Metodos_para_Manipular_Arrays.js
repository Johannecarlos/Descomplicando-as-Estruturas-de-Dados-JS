const redesSociais = [
  'Facebook',
  'YouTube',
  'WhatsApp',
  'Instagram',
  'WeChat',
  'TikTok',
  'LinkedIn',
];
/*
const YouTube = redesSociais.indexOf('YouTube');
console.log(YouTube);

console.log(redesSociais.includes('Reddit'));
*/
for (let i = 0; i < redesSociais.length; i++) {
  console.log(redesSociais[i]);
}

for (const i in redesSociais) {
  console.log(`${i}: ${redesSociais[i]}`);
}

for (const valor of redesSociais) {
  console.log(valor);
}

redesSociais.forEach((valor, indice, redes) => {
  console.log(valor);
  console.log(indice);
  console.log(redes);
});
/*
let i = 0;
while (i < redesSociais.length) {
  console.log(redesSociais[i]);
  i++;
}
*/
let i = 0;
do {
  console.log(redesSociais[i]);
  i++;
} while (i < redesSociais.length);
