const data = require('../data/zoo_data');

// Tive ajuda de colegas Imar Mendes, Luá pra desenrrolar a logica,

const { employees, species } = data;

const encontrarFuncionário = ({ name, id }) => {
  const funcionario = employees.find((employee) => employee.firstName === name
    || employee.lastName === name
    || employee.id === id);
  return funcionario;
};

const responsavelPor = (parametro) => {
  const mapFunc = encontrarFuncionário(parametro).responsibleFor;
  return mapFunc.map((animal) => species.find((specie) => specie.id === animal).name);
};

const regioes = (parametro) => {
  const mapLocal = encontrarFuncionário(parametro).responsibleFor;
  return mapLocal.map((animal) => species.find((specie) => specie.id === animal).location);
};

const objetoRequerido = (parametro) => {
  const primeiroFuncionario = encontrarFuncionário(parametro);
  if (!primeiroFuncionario) throw new Error('Informações inválidas');
  return {
    id: primeiroFuncionario.id,
    fullName: `${primeiroFuncionario.firstName} ${primeiroFuncionario.lastName}`,
    species: responsavelPor(parametro),
    locations: regioes(parametro),
  };
};

function getEmployeesCoverage(parametro) {
  if (!parametro) {
    return employees.map((func) => objetoRequerido(func));
  }
  return objetoRequerido(parametro);
}

module.exports = getEmployeesCoverage;
