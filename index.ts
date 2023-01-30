// 1-----

interface user{

[key:string]:any;
age:number;
name:string;
occupation:string
}

// 2----

let persons : all_ua[] = [
  {
    age: 20,
    name: "ali",
    occupation: "HR",
  },
  {
    age: 23,
    name: "amer",
    occupation: "fron end ",
  },
  {
    age: 28,
    name: "Mohammed",
    occupation: 'teacher',
  },
];

// 3----
function printAll (x: all_ua[]) {
  for(const per of x){
  console.log(per);
  
  }
}
printAll(persons)

// 4----
interface Admin {
[key:string]:any;
age:Number;
name:String;
specialty:String
}

// 5----

type all_ua = user | Admin

let allAdmin = [
  {
    age: 23,
    name: "enaad",
    specialty: "cayber security",
  },
  {
    age: 33,
    name: "fhad",
    specialty: "artist",
  },
  {
    age: 19,
    name: "tlaal",
    specialty: "programmer",
  },
];

for (let i = 0; i < allAdmin.length; i++) {
  persons.push(allAdmin[i]);
}

// 6----

function userOrAdmin (x: all_ua[]){
  for (const per of x) {
      if ("occupation" in x ){
          console.log(`Name ${per.name}, Age ${per.age}, Occupation ${per.occupation}is user`);
      }else{
          console.log(`Name ${per.name}, Age ${per.age}, Specialty ${per.specialty}is admin`);
      }
  }
  
}
userOrAdmin(persons)

// 7---

function chaAge (name: string, age : number){
  for (const x of persons) {
      if (x.name == name){
          x.age = age
      }
      console.log(x);
      
  }
}
chaAge("ali", 33)







export{}