const data = require('../data/zoo_data');

const animals = data.species;

function getSpeciesByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));

  // seu código aqui
}

module.exports = getSpeciesByIds;
