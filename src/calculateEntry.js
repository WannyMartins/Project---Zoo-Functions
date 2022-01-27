const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants) {
    if (Object.keys(entrants).length === 0) {
      return { adult: 0, senior: 0, child: 0 };
    }
    const child = entrants.map((idade) => idade.age < 18)
      .reduce((total, idadeAtual) => total + idadeAtual);

    const adult = entrants.map((idade) => idade.age >= 18 && idade.age < 50)
      .reduce((total, idadeAtual) => total + idadeAtual);

    const senior = entrants.map((idade) => idade.age >= 50)
      .reduce((total, idadeAtual) => total + idadeAtual);

    return { adult, senior, child };
  }
  return { adult: 0, senior: 0, child: 0 };
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
// tive ajuda para ver que o .map nao le objeto somente arrays então o colega Leandro Bomfim me ajudou.

module.exports = { calculateEntry, countEntrants };
