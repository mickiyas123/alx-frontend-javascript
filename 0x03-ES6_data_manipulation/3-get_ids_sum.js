export default function getStudentIdsSum(studentList) {
  const idSum = studentList.reduce((total, student) => total + student.id, 0);
  return idSum;
}
