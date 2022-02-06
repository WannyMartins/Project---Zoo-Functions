const data = require('../data/zoo_data');

const { species } = data;

// O colega Imar me ajudou a logica deste exercício

const regioes = ['NE', 'NW', 'SE', 'SW'];

const epeciesPorRegiao = () => regioes.reduce((acc, curr) => {
  // cada regiao é a chave no acc[curr] entao filtra as especies da regiao igual a 1 chave e se fr igual vai acumulando no acc[curr] o nome da especie, então pula para a próxima regiao e acumula nela os animais dela... e assim o acc do reduce trá todas as regioes como chave e como valor os animais correspondentes.
  acc[curr] = species.filter((specie) => specie.location === curr).map((animal) => animal.name);
  return acc;
}, {});

// console.log(regiaoESpecie())

const filtrandoAnimais = (especie, sorted, sex) => {
  let retorno;
  // aqui mostra todos os residentes do animal no parametro
  const residentes = species.find((specie) => specie.name === especie).residents;

  // se parametro tiver sex retorna os animais residentes daquele sex, se não tiver parametro sex, retorna o nome de todos os animais residentes.

  if (sex) {
    retorno = residentes.filter((residente) => residente.sex === sex)
      .map((resident) => resident.name);
  } else {
    retorno = residentes.map((resident) => resident.name);
  }

  // se tiver o 3 paramento ordena por sorted alfabetica os nomes dos animais.
  if (sorted) retorno.sort();
  return retorno;
};
// coloca o animal pesquisado como chave do objeto e os nomes por sex como valor, ordenado ou não segundo parametro colocado;
const objAnimalNome = (especie, sorted, sex) => ({
  [especie]: filtrandoAnimais(especie, sorted, sex),
});

const objComTodasRegioes = (sorted, sex, regiao) => {
  const animalPorRegiao = epeciesPorRegiao();
  const objeto = {
    NE: animalPorRegiao.NE.map((especie) => objAnimalNome(especie, sorted, sex)),
    NW: animalPorRegiao.NW.map((especie) => objAnimalNome(especie, sorted, sex)),
    SE: animalPorRegiao.SE.map((especie) => objAnimalNome(especie, sorted, sex)),
    SW: animalPorRegiao.SW.map((especie) => objAnimalNome(especie, sorted, sex)),
  };

  return objeto;
};

const animalComNomeEsex = (options) => {
  const { sorted, sex } = options;
  if (Object.keys(options).includes('includeNames')) return objComTodasRegioes(sorted, sex);
};
function getAnimalMap(options) {
  if (!options || !Object.keys(options).includes('includeNames')) return epeciesPorRegiao();
  return animalComNomeEsex(options);
}

module.exports = getAnimalMap;
