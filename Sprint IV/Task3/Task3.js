//EXercise 1
let Ex1={
    name:"Raj",
    age:20,
    city:"Tenkasi"
}
console.log(Ex1);
console.log(Ex1.name);
console.log(Ex1.age);
console.log(Ex1["city"]);

Ex1.name="Vidya";
console.log(Ex1.name);


//Exercise 2
let Ex2={
    firstName:"Vishwa",
    lastName:"Bharathi",
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(Ex2.getFullName());


//Exercise3
let Ex3=`{"name":"raji","email":"raj@gmail,com","skills":["Javascript","C++","java"]}`;
console.log(Ex3);
let Ex3Obj=JSON.parse(Ex3);
console.log(Ex3Obj);

//Exercise4
fetch('data.json')
     .then(response => response.json())
     .then(data=>console.log(data));
