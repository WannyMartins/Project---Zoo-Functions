const data = require('../data/zoo_data');

const { species, hours } = data;

const semana = () => {
  const dias = Object.keys(hours);
  return dias.reduce((diasDaSemana, diaAtual) => {
    const chaveObj = diasDaSemana;
    if (diaAtual !== 'Monday') {
      chaveObj[diaAtual] = {
        officeHour: `Open from ${hours[diaAtual].open}am until ${hours[diaAtual].close}pm`,
        exhibition: species.filter((especie) => especie.availability.includes(diaAtual))
          .map((especie) => especie.name),
      };
    } else {
      chaveObj[diaAtual] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
    return diasDaSemana;
  }, {});
};
function getSchedule(scheduleTarget) {
  const animais = species.map((specie) => specie.name);
  const diasDaSemana = Object.getOwnPropertyNames(hours);

  const days = semana();
  if (animais.includes(scheduleTarget)) {
    return species.find((nome) => nome.name === scheduleTarget).availability;
  }
  if (diasDaSemana.find((element) => element === scheduleTarget)) {
    return {
      [scheduleTarget]: days[scheduleTarget],
    };
  }
  return days;
}
// tive ajuda de vários colegas para desenvolver Imar Mendes, Danillo Gonçalves, Alexandre Summoyama explicando a colega Veronica na monitoria.
// usei a propriedade getOwnPropertyNames para iterar dentro do objeto hours e trazer as chaves como strings para iterar sobre elas com o parametro // conforme >>> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames

module.exports = getSchedule;
