interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: 'Abebe',
    lastName: 'Kebede',
    age: 45,
    location: 'Addis Ababa'
}

const student2: Student = {
    firstName: 'Samuel',
    lastName: 'Hailu',
    age: 45,
    location: 'Bahirdar'
}

const studentArray:Student[] = [student1, student2];


let table = document.createElement('table');
const body = document.body

table.innerHTML = `<tr>
                      <th>First Name</th>
                      <th>Location</th>
                   </tr>`

studentArray.forEach((student: Student): void => {
    const row = `<tr>
                  <td>${student.firstName}</td>
                  <td>${student.location}</td>
                 </tr>`
    table.innerHTML += row;
})

body.append(table)

table.style.border = "3px solid purple";
const th = document.getElementsByTagName('th');

for (let i = 0; i < th.length; i++)
{
    th[i].style.border = "2px solid black";
}

const td = document.getElementsByTagName('td');

for (let i = 0; i < td.length; i++)
{
    td[i].style.border = "1px solid black";
}