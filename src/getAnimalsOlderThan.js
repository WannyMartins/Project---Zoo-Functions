const data = require('../data/zoo_data');

const animals = data.species;

function getAnimalsOlderThan(animal, age) {
  const especie = animals.find((bicho) => bicho.name === animal);
  
     return especie.residents.every((resident) =>
 resident.age >= age);
}

console.log(getAnimalsOlderThan('lions', 12))
module.exports = getAnimalsOlderThan;
