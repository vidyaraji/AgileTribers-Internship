//Exercise 1
function positiveNumber(arr){
    return arr.find(Element=>Element>0)
}
console.log(positiveNumber([-10,0,-2,5,23,-1]))


//Exercise 2
const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
    ];
function booksByTitle(books,title){
   return books.find(Element=>Element.title.toLowerCase()==title.toLowerCase())
}

console.log(booksByTitle(books,'1984'));
console.log(booksByTitle(books,'To Kill a Mockingbird'));


//Exercise 3
const employees = [
    { id: 1, name: 'Alice', position: 'Manager' },
    { id: 2, name: 'Bob', position: 'Engineer' },
    { id: 3, name: 'Charlie', position: 'Technician' }
    ];
    

function findDetailsById(employeesDetails,id){
   return employeesDetails.find(element=>element.id==id)
}

console.log(findDetailsById(employees,1))


//Exercise 4
const Ex4arr=[6,2,6,2,7];
function primeNumbers(arr){
    return arr.find(element=>{
        let count=0;
        for(i=1;i<=10;i++){
           if(element%i===0){
             count++;
           }
        }
        if(count===2){
            return element ;
        }
    })
}
console.log(primeNumbers(Ex4arr));




// //Exercise 5
function destructing(data){    
    const {firstName,lastName,age} = data;
    return `${firstName} ${lastName} is ${age} Years Old`
    }
const obj={ firstName: 'John', lastName: 'Doe',age: 30 }
console.log(destructing(obj))


//Exercise 6
function sqrt(array){
    const evenArrays=array.filter((element)=>element%2==0);
    return evenArrays.map((x)=>{
        return x*x;
    })
}
console.log(sqrt([1,2,3,4,5,6]))


//Exercise 7
function singleString(seperator=",",...a){
    array=[...a];
    console.log(array.join(seperator));
}
singleString("--","hello","this", "is" ,"raji");



//Exercise 8
let setArray=(array1,array2)=>{
    const spreadarray=[...array1,...array2];
    const setArray=new Set(spreadarray);
    return setArray;
}
console.log(setArray([1,2,3,4,5,6],[2,3,4,5]));


//Exercise 9
async function fetchApi(api){
    let data=await fetch(api);
    data=await data.json()
    console.log(data)
}
fetchApi('https://jsonplaceholder.typicode.com/todos/1')


//Exercise 10
function Ex10(array){
    let totalPrice=array.reduce((acc,{price})=>{
        return acc+price;
    },0)
    avg=Math.round(totalPrice/array.length);
    return array.find((element)=>{
        element.price>avg;
        return element.name
    })
}
console.log(Ex10([
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 }
    ]
))

