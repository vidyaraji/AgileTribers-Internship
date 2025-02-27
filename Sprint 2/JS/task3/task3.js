//Exercise1
function sayHello(name){
    console.log(`Hello, ${name}!!!`);
 }
 sayHello("Agile");

 //Exericse2
 function add(a,b){
    c=a+b;
    console.log(`Sum : ${c}`);
 }
 add(432,987);

 //Exercise 3
 let x=5;
 let y=9;
 let multiply=function multiply3(x,y){
    return x*y;
 };
 console.log(`Multiplication using Function Expression:`,multiply(45,89));

 //Exercise 4
 function multiply4(a,b){
    c=a*b;
    console.log(`Multiplication using function : ${c}`); 
}
 multiply4(54,87);

 //Exercise 5
 function divide(a,b){
        return a/b;
    }
console.log(`Division:`,divide(450,5));
    
 //Exercise 6
 let res=1;
function factorial(n){
    for(i=1;i<=n;i++){
        res*=i;
    }
    return res;
 }
 console.log("factorial:",factorial(5));

 //Exercise 7
 function squaring(a){
    return a*a;
 }
console.log("Squaring:",squaring(89))

