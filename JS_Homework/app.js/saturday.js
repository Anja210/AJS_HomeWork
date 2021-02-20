//EXERCISE #3 & #4

function Employee(firstName, lastName, sector) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sector = sector;
}

let employee1 = new Employee("Bob", "Douley", "finance");
let employee2 = new Employee("Mark", "Twain", "data");
let employee3 = new Employee("John", "Vick", "meintenance");

let employee4 = new Employee("Jane", "Cool", "security");
let employee5 = new Employee("Jack", "Sparrow", "HR");
let employee6 = new Employee("Mickey", "Mouse", "IT");


let oldUsers = [employee1, employee2, employee3];
let migratedUsers = [employee4, employee5, employee6];
let allUsers = [employee1, employee2, employee3, employee4, employee5, employee6];

function printUser() {
    let allUser = prompt(`Please enter OLD - for if you want to see the list of old
 employees, enter MIGRATED - for list of migrated employees, or ALL if you like to see
 all employees!`)
    if (allUser === 'old') {
        for (let i = 0; i <= oldUsers.length - 1; i++) {
            console.log(i + 1 + '.' + oldUsers[i].firstName);
        }
    } else if (allUser === 'migrated') {
        for (let i = 0; i <= migratedUsers.length - 1; i++) {
            console.log(i + 1 + '.' + migratedUsers[i].firstName);
        }

    } else if (allUser === 'all') {
        for (let i = 0; i <= allUsers.length - 1; i++) {
            console.log(i + 1 + '.' + allUsers[i].firstName);
        }
    } else {
        alert("ERROR")
    }
}

printUser();

function searchUser() {
    let fName = prompt('Please enter employee name if you like to ckeck if it exists.')

    for (let i = 0; i <= allUsers.length - 1; i++) {
        if (fName === allUsers[i].firstName) {
            console.log(i + 1 + '.' + allUsers[i].firstName)
            break;
        }
        else {
            continue;
        }
    }
}
searchUser();


// if((i + 1) == users.length){
//     console.log("There is no such user");
// }