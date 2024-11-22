import { Seq } from 'immutable';

export function printBestStudents(grades) {
  const bestStudents = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      ...student,
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }))
    .toJS();

  console.log(bestStudents);
}
