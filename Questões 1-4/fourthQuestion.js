//4) Faça uma função que receba uma data no formato MM/DD/YYYY, exemplo: 03/01/2002. Você deverá informar a qual dia da semana essa data se refere.

function dayForWeek(month, day, year) {
  const date = new Date(year, month, day)

  let dia = date.getDay()

  if (dia === 0) {
    dia = 'Domingo'
  }
  if (dia === 1) {
    dia = 'Domingo'
  }
  if (dia === 2) {
    dia = 'Segunda'
  }
  if (dia === 3) {
    dia = 'Terça'
  }
  if (dia === 4) {
    dia = 'Quarta'
  }
  if (dia === 5) {
    dia = 'Quinta'
  }
  if (dia === 6) {
    dia = 'Sexta'
  }
  if (dia === 7) {
    dia = 'Sabádo'
  }

  return console.log(dia)
}
dayForWeek(01, 03, 2002) // dia = Domingo
