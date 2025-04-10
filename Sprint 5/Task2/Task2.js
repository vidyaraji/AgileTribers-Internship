//Exercise 1
function replaceString(str){
    return str.toLowerCase().replaceAll('Apple'.toLowerCase(),'orange'.toLowerCase())
}

console.log(replaceString('apple banana apple grape apple').toUpperCase());




//Exercise 2
let Ex2=(arr,value)=>arr.includes(value);
console.log(Ex2([1,2,3,4],5));
console.log(Ex2(["Hello","This","is","raji"],"raji"));




//Exercise 3
async function fetchapi(){

    let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data= await data.json()
    console.log(data)
}
fetchapi()





//Exercise 4
function divideNumbers(num1,num2){
    try{
        if(num2==0){
            throw new Error("Division By Zero Is Not Allowed")
        }
        return num1/num2;
    }catch(errorMessage){
    console.log("Err",errorMessage)
}
}
divideNumbers(6,0);




//Exercise 5
let personsDetails=(personName,personAge)=>{
    return `Hello , My Name is ${personName} and I am ${personAge} Years old.`
}
console.log(personsDetails('Jhon',36))





//Exercise 6
function destructing(obj){
    let {name,age,city}=obj;
    console.log(name,city,age);
}
destructing({
    name:'Raj',
    age:21,
    city:'Madurai'
})





//Exercise 7
let defaultParameters=(number1,number2=10)=>{
    return number1+number2;
}
console.log(defaultParameters(5,20));
console.log(defaultParameters(5));




//Exercise 8
function sumUsingRest(...args){
    let total=0;
    for (value of args){
        total+=value;
    }
    return total;
}
console.log(sumUsingRest(1,2,4,5,6,10))





//Exercise 9
function sumOfNumbers(arr){
    return sum=arr.reduce((acc,curr)=>{
        return acc+curr;
        // acc=acc+curr;
    })
}

console.log(sumOfNumbers([4,32,4,3.66,3,2,1]))