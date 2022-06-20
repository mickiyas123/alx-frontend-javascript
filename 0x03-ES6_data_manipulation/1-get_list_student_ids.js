export default function getListStudentIds(objArray) {
  if (Array.isArray(objArray)) {
    const newArray = objArray.map((student) => student.id);
    return newArray;
  }
  return [];
}
