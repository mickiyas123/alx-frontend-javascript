export default function createReportObject(employeesList) {
  const newObj = {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return newObj;
}
