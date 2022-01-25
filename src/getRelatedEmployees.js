const data = require('../data/zoo_data');

const trabalhadores = data.employees;

function isManager(id) {
  return trabalhadores.some((empregado) =>
    empregado.managers.includes(id));
  // seu código aqui
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    if (isManager(managerId)) {
      return trabalhadores
        .filter((empregado) => empregado.managers.includes(managerId))
        .map((empregados) =>
          `${empregados.firstName} ${empregados.lastName}`);
    }
  } catch (error) {
    throw error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
