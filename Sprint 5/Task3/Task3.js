//Exercise 1
function longestString(arr){
     return arr.reduce((acc,curr)=>{
        return acc.length>curr.length? acc:curr ;   
    });
}
let arr=["helloo","jegan","bhaiiii"];
console.log(longestString(arr));


//Exercise 2
function flattenArray(arr){
    return arr.flat(Infinity);
}
console.log(flattenArray([1,3,3,[3,4,6,[2,6,2],[3,6,7]]]));


//Exercise 3

arr=["apple","apple","banana","watermelon"];
function wordOccurence(arr){
    return obj=arr.reduce((acc,curr)=>{
        acc[curr]?++acc[curr]:acc[curr]=1;
        return acc;
    },{})
}
console.log(wordOccurence(arr))



//EXercise 4
const people = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 21 },
    { name: 'David', age: 25 },
    { name: 'Eve', age: 22 }
    ];
    
function groupByProperty(arr, property) {
    return arr.reduce((groups, obj) => {
        const key = obj[property];
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(obj);
        return groups;
    }, {});
}
const groupedByCity = groupByProperty(people, 'name');
console.log(groupedByCity);




//Exercise 5
const cart = [
    { item: 'apple', price: 1.5 },
    { item: 'banana', price: 2.0 },
    { item: 'orange', price: 1.25 }
    ];

function totalPrice(cart){
    return cart.reduce((acc,curr)=>{
        return acc+curr.price;
    },0)
}
console.log(totalPrice(cart))
      


//Exercise 6
const Ex6=[1,5,34,3,10];
function findEvenNum(arr){
   return arr.find(Element=>Element%2==0)
}

console.log(findEvenNum(Ex6))



//Exercise 7
const students = [
    { name: 'Alice', age: 21 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 23 }
    ];
function findStudents(data,name){
    return data.find(Element=>Element.name==name)
}


console.log(findStudents(students,'Charlie'));
console.log(findStudents(students,'Bob'));



//Exercise 8
const products = [
    { id: 101, name: 'Laptop' },
    { id: 102, name: 'Phone' },
    { id: 103, name: 'Tablet' }
    ];

function findDetailsById(productDetails,id){
   return productDetails.find(element=>element.id==id)
}

console.log(findDetailsById(products,101))
console.log(findDetailsById(products,103))



//Exercise 9
const tasks = [
    { taskName: 'Task 1', dueDate: '2023-06-01' },
    { taskName: 'Task 2', dueDate: '2024-05-01' },
    { taskName: 'Task 3', dueDate: '2024-01-01' },
    { taskName: 'Task 3', dueDate: '2023-01-01' }
    ];
function findDueDate(tasksDetails,dueDate){
   return tasksDetails.find(element=>element.dueDate>=dueDate)
}    

console.log(findDueDate(tasks,'2023-06-01'))