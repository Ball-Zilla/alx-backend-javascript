export default function createReportObject(employeesList) {
	const allEmployees = {};
  
	for (const [key, value] of Object.entries(employeesList)) {
	  allEmployees[key] = [...value];
	}
  
	return {
	  allEmployees,
	  getNumberOfDepartments() {
		return Object.keys(employeesList).length;
	  },
	};
  }