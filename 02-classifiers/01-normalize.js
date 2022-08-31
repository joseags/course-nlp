const inputEn = `Who is your developer?`;
const inputEs = `¿Quién es tu desarrollador?`;

function normalize(text){
  return text
  .normalize(`NFD`)
  .replace(/[\u0300-\u036f]/g,``)
  .toLowerCase();

}

console.log(normalize(inputEn));
console.log(normalize(inputEs));
/*console.log(inputEs.length);  
console.log(inputEs.normalize(`NFD`).length);  
console.log(inputEs.normalize(`NFD`)[4]);
console.log(inputEs.normalize(`NFD`)[5]);
console.log(`e`+ inputEs.normalize(`NFD`)[5]);
*/


