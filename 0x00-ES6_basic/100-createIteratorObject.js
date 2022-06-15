export default function createIteratorObject(report) {
  const newArray = [];

  for (const key in report.allEmployees) {
    if (key) {
      for (const newKey in report.allEmployees[key]) {
        if (newKey) {
          newArray.push(report.allEmployees[key][newKey]);
        }
      }
    }
  }
  return newArray;
}
