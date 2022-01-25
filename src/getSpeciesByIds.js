const data = require('../data/zoo_data')
const animals = data.species;

function getSpeciesByIds(...ids) {
  return animals.filter((animal) => ids.includes(animal.id));

  // seu código aqui
}
console.log(getSpeciesByIds());
console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae', '0938aa23-f153-4937-9f88-4858b24d6bce'));


module.exports = getSpeciesByIds;
