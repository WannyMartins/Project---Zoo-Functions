const data = require('../data/zoo_data');

const animals = data.species;

function countAnimals(animal) {
  const objeto = {};
  if (!animal) {
    animals
      .map((element) => {
        {
        objeto[element.name] = element.residents.length;
        }
      });
    return objeto;
  }
  if (animal) {
    if (animal.sex) {
      const encontrarAnimal = animals.find((especie) => especie.name.includes(animal.specie));
      const encontrarSexoAnimal = [encontrarAnimal].map((resident) => resident.residents.map((sexo) => sexo.sex.includes(animal.sex)).filter((sex) => sex === true).length);
      return `${encontrarSexoAnimal}`;
    }
    return animals.find((especie) => especie.name.includes(animal.specie)).residents.length;
  }
}
console.log(countAnimals());

console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
console.log(countAnimals({ specie: 'bear' }));

module.exports = countAnimals;
