"use strict";
// 1-----
exports.__esModule = true;
// 2----
var persons = [
    {
        age: 20,
        name: "ali",
        occupation: "HR"
    },
    {
        age: 23,
        name: "amer",
        occupation: "fron end "
    },
    {
        age: 28,
        name: "Mohammed",
        occupation: 'teacher'
    },
];
// 3----
function printAll(x) {
    for (var _i = 0, x_1 = x; _i < x_1.length; _i++) {
        var per = x_1[_i];
        console.log(per);
    }
}
printAll(persons);
var allAdmin = [
    {
        age: 23,
        name: "enaad",
        specialty: "cayber security"
    },
    {
        age: 33,
        name: "fhad",
        specialty: "artist"
    },
    {
        age: 19,
        name: "tlaal",
        specialty: "programmer"
    },
];
for (var i = 0; i < allAdmin.length; i++) {
    persons.push(allAdmin[i]);
}
// 6----
function userOrAdmin(x) {
    for (var _i = 0, x_2 = x; _i < x_2.length; _i++) {
        var per = x_2[_i];
        if ("occupation" in x) {
            console.log("Name ".concat(per.name, ", Age ").concat(per.age, ", Occupation ").concat(per.occupation, "is user"));
        }
        else {
            console.log("Name ".concat(per.name, ", Age ").concat(per.age, ", Specialty ").concat(per.specialty, "is admin"));
        }
    }
}
userOrAdmin(persons);
// 7---
function chaAge(name, age) {
    for (var _i = 0, persons_1 = persons; _i < persons_1.length; _i++) {
        var x = persons_1[_i];
        if (x.name == name) {
            x.age = age;
        }
        console.log(x);
    }
}
chaAge("ali", 33);
