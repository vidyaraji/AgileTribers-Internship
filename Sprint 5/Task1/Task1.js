//Exercise 1

Ex1arr=[1,2,3,4,5];
let res1=[];


function squaring(){
    for(i=0;i<Ex1arr.length;i++){
        res1[i]=(Ex1arr[i]*Ex1arr[i]);
    }
    console.log(res1);
}
squaring();


let res=Ex1arr.map((element)=>element*element)
console.log(res);


//Exercise 2

const obj1={a:1,b:2};
const obj2={c:3,d:4};
const obj3={e:5,f:6};

const obj4={...obj1,...obj2,...obj3};
console.log(obj4);


//Exercise 3


function getStudentScore(students, name) {
  const studentMap = new Map();
  students.forEach(student => {
    studentMap.set(student.name, student.score);
})
  return studentMap.get(name);
}

const students = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92},
  { name: 'Charlie', score: 78 }
];

console.log(getStudentScore(students, 'Alice')); 


//Exercise 4
Ex4arr=[1,2,2,3,4,4,5];
Ex4arr1= new Set();
Ex4arr.forEach(element=>{
    Ex4arr1.add(element)
})
console.log(Ex4arr1);


//Exercise 5
let Ex5arr=['Apple','Banana','Cherry','date','Elderberry','Fig','Grape'];
let Ex5arr1=Ex5arr.filter(element=>{
  return element.length>5;
})
console.log(Ex5arr1)


//Exercise 6
let Ex6arr=[1,2,3,4,5];
let resultEx6=Ex6arr.reduce((acc,curr)=>{
  return acc*curr;
  
})
console.log(resultEx6);


//Exercise 7
const Ex7arr=[1,2,5,2,4,2,5];
let Ex7obj=new Object;
function indexFinding(num){
  Ex7obj={
    FirstIndex: Ex7arr.indexOf(num),
    LastIndex: Ex7arr.lastIndexOf(num)
}
console.log(Ex7obj);
}
indexFinding(5)


//Exercise 8
let Ex81=[1,2,4,5];
let Ex82="hello";
let Ex83={};
function IsArray(element){
  return Array.isArray(element)
}

console.log(IsArray([1,2,4,5]));
console.log(IsArray("hello"));


//Exercise 9
function isIncludesWord(sentence,word){
  return sentence.toLowerCase().includes(word.toLowerCase())
}

console.log(isIncludesWord("Another Name Of Sasi Is Korangu","KORANGU"))


//Exercise 10
function arrayIndex(element){
  for(arr in element){
    console.log(arr)
  }
}
arrayIndex(['apple','banana','cherry','Guava']);