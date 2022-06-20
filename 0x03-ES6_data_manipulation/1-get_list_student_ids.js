export default function getListStudentIds(objArray) {
  if (Array.isArray(objArray)) {
    const newArray = [];
    objArray.forEach((val) => newArray.push(val.id));
    return newArray;
  }
  return [];
}
