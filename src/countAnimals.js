const data = require('../data/zoo_data');

const animals = data.species;

function countAnimals(animal) {
  const objeto = {};
  animals.forEach((element) => {
    objeto[element.name] = element.residents.length;
  });
  if (!animal) {
    return objeto;
  }
  if (!animal.sex) {
    const encontrarAnimal = animals.find((especie) => especie.name.includes(animal.specie));
    return encontrarAnimal.residents.length;
  }
  return animals.find((nome) => nome.name === animal.specie)
    .residents.filter((sexo) => sexo.sex === animal.sex).length;
}

// referecencias === tive ajuda de varios colegas nas salas de mentoria:
// Imar Mendes;
// Wendryo;
// RaphaelMartins; e da Mentora AnaLaura
module.exports = countAnimals;
