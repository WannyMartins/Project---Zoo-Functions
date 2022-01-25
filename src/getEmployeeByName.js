const data = require('../data/zoo_data');

const trabalhadores = data.employees;

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return trabalhadores.find((empregado) =>
    employeeName.includes(empregado.firstName) || employeeName.includes(empregado.lastName));
  // seu código aqui
}
console.log(getEmployeeByName('Nigel'));
module.exports = getEmployeeByName;
