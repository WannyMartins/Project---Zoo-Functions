const data = require('../data/zoo_data');

const especie = data.species;
const employee = data.employees;

function getOldestFromFirstSpecies(id) {
  const encontrarEmployee = employee.find((funcionario) => funcionario.id === id);
  const animalMaisVelhDesteId = especie
    .find((animal) => animal.id === encontrarEmployee.responsibleFor[0])
    .residents.sort((a, b) => b.age - a.age).find((primeiro) => primeiro.name);
  return [animalMaisVelhDesteId.name, animalMaisVelhDesteId.sex, animalMaisVelhDesteId.age];
}

// tive ajuda do Imar Mendes para resolver o retorno da minha função.
module.exports = getOldestFromFirstSpecies;
