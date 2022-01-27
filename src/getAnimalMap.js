const data = require('../data/zoo_data');
// const especies = data.species;
// const semParametro = () => {
//     const localIgual = {};

//       return especies.filter((animal) => animal.name).map((animal) => {
//         localIgual[animal.location] = animal.filter((bicho) => bicho.location.includes(animal.location)).name;
//     return localIgual});//=== 'NE').map((nome) => nome.name);
// //     // localIgual.NE = ne;
//     // const nw = data.species.filter((especie) => especie.location === 'NW').map((nome) => nome.name);
//     // localIgual.NW = nw;
//     // const se = data.species.filter((especie) => especie.location === 'SE').map((nome) => nome.name);
//     // localIgual.SE = se;
//     // const sw = data.species.filter((especie) => especie.location === 'SW').map((nome) => nome.name);
//     // localIgual.SW = sw;
//     //return localIgual;

//  }

// const sexPorLocal = (options) => {
//   const sexLocal = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };
//   const ne = data.species.filter((especie) => especie.location === 'NE').map((nome) => nome.name);
//   sexLocal.NE = ne;
//   const nw = data.species.filter((especie) => especie.location === 'NW').map((nome) => nome.name);
//   sexLocal.NW = nw;
//   const se = data.species.filter((especie) => especie.location === 'SE').map((nome) => nome.name);
//   sexLocal.SE = se;
//   const sw = data.species.filter((especie) => especie.location === 'SW').map((nome) => nome.name);
//   sexLocal.SW = sw;
//   return sexLocal;
// };

// const includesName = (options) => {
//   const comNome = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };
//   const ne = data.species.filter((especie) => especie.location === 'NE').map((nome) => { Object.keys[nome.name]  nome.residents.name })
//   comNome.NE = ne;
//   // const nw = data.species.filter((especie) => especie.location === 'NW').map((nome) => nome.name);
//   // comNome.NW = nw;
//   // const se = data.species.filter((especie) => especie.location === 'SE').map((nome) => nome.name);
//   // comNome.SE = se;
//   // const sw = data.species.filter((especie) => especie.location === 'SW').map((nome) => nome.name);
//   // comNome.SW = sw;
//   return comNome;
// }
function getAnimalMap(options) {
  // if (!options) return semParametro();
  // //   if (Object.keys(options.sex)) return sexPorLocal();
  // //   if (Object.keys(options.includeNames) === true) return includesName();
}
// console.log(getAnimalMap())

// console.log(getAnimalMap({ includeNames: true }))

module.exports = getAnimalMap;
