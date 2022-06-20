export default function getStudentsByLocation(studentList, city) {
  const newArray = studentList.filter((student) => student.location === city);
  return newArray;
}
