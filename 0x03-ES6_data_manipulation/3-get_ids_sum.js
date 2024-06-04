export default function getStudentIdsSum(array) {
	  if (!Array.isArray(array)) return [];

	  return array.reduce((acc, student) => acc + student.id, 0);
}
