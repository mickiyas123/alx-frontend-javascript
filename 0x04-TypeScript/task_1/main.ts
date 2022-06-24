interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}

// Input 
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };

console.log(teacher3);

// Output

// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

interface Directors extends Teacher {
    numberOfReports: number;
}

// Input
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

console.log(director1);
// Output
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

function printTeacher(inputString: printTeacherFunction) : string {
  const output = `${inputString.firstName.slice(0, 1)}. ${inputString.lastName}`;
  return output;
}

// Input
const teacher: printTeacherFunction = {
    firstName: "John",
    lastName: "Doe"
}

console.log(printTeacher(teacher));

// Output
// J. Doe 


interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;

}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return `${this.firstName}`
    }
}