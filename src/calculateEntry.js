const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants) {
    const child = entrants.map((idade) => idade.age < 18)
      .reduce((total, idadeAtual) => total + idadeAtual);

    const adult = entrants.map((idade) => idade.age >= 18 && idade.age < 50)
      .reduce((total, idadeAtual) => total + idadeAtual);

    const senior = entrants.map((idade) => idade.age >= 50)
      .reduce((total, idadeAtual) => total + idadeAtual);

    return { adult, senior, child };
  }
  return 0;
}

function calculateEntry(entrants) {
  let resultado = 0;
  const controleEntrada = countEntrants(entrants);
  const { adult, senior, child } = controleEntrada;
  const adultos = adult * data.prices.adult;
  const criancas = child * data.prices.child;
  const seniors = senior * data.prices.senior;
  resultado = adultos + criancas + seniors;

  return resultado;
}

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

//console.log(countEntrants());

 //console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
