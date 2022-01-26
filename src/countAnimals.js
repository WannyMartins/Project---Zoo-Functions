const data = require('../data/zoo_data');

const animals = data.species;

function countAnimals(animal) {
  const objeto = {};
  if (!animal) {
    animals
      .map((element) => {
        objeto[element.name] = element.residents.length;
        return objeto;
      });
  }

  const ani = data
    .map((bicho) => bicho.species);
  return ani;
}

console.log(countAnimals({ specie: 'penguins' }));
module.exports = countAnimals;
