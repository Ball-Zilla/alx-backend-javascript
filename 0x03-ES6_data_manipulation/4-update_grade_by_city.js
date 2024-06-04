export default function updateStudentGradeByCity(array, city, newGrades) {
  if (!Array.isArray(array)) return [];

  const filteredStudents = array.filter((student) => student.location === city);

  return filteredStudents.map((student) => {
    const studentGrade = newGrades.find(
      (grade) => grade.studentId === student.id,
    );
    return studentGrade
      ? { ...student, grade: studentGrade.grade }
      : { ...student, grade: 'N/A' };
  });
}
