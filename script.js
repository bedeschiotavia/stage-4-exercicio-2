const students = [
  {
  stName: 'João',
  gradeOne: 6,
  gradeTwo: 8
  },
  {
  stName: 'Maria',
  gradeOne: 8,
  gradeTwo: 9
  },
  {
  stName: 'José',
  gradeOne: 8,
  gradeTwo: 7
  },

]

function gradeAverage(gradeOne, gradeTwo){
  return (gradeOne + gradeTwo)/2;
}

for (let student of students ){
  let averageResult = gradeAverage(student.gradeOne, student.gradeTwo);

  if (averageResult > 7) {
    alert(`
    Estudante: ${student.stName} - Média: ${averageResult}
    Parabéns, ${student.stName} ! Foi aprovado/a.
    `)
  } else {
    alert(`
    Estudante: ${student.stName} - Média: ${averageResult}
    Não foi desta vez, ${student.stName} ! Tente novamente.
    `)
  }

}