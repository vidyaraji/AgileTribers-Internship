// Exercise 1
let full_Name="raji";      //camel case
let fullname="vidya";     //normal case
let full_name="priya";    //snake case
let Fullname="venisha";   //pascal case


// Exercise 2
const number=10;
// number=5; ERRoR Message


//Exercise 3
let arr=[89,"apple",90,"orange"];
console.log(arr[0]);
console.log(arr.slice(0,3));


// Exercise 4
let a_ex4=10;
let b_ex4=20;
console.log(a_ex4+b_ex4);

// Exercise 5
let pie=3.14;
let radius=4;
let area_Of_Circle=pie*radius*radius;
console.log(area_Of_Circle);

// Exercise 6
let length=24;
let width=2;
let area_Of_Rectangle= length*width;
console.log(length*width);

// Exercise 7
let base=4;
let height=22;
let area_Of_Triangle=(base*height)/2;
console.log(area_Of_Triangle);

// Exercise 8
let operator=prompt("Enter the Operator:");
let number1=parseInt(prompt("Enter The First Number:"));
let number2=parseInt(prompt("Enter The second Number:"));
let Results;
if(operator=="+"){
    Results=number1+number2;
}
else if(operator=="-"){
    Results=number1-number2;
}
else if(operator=="*"){
    Results=number1*number2;
}
else if(operator=="/"){
    Results=number1/number2;
}
else{
    console.log("Inappropriate Input");
}
console.log(Results);

// Exercise 9
let number_ex9=50;
console.log(number_ex9);
number_ex9+=50;
console.log(number_ex9);
number_ex9-=20;
console.log(number_ex9);
number_ex9*=60;
console.log(number_ex9);
number_ex9/=4;
console.log(number_ex9);


// Exercise 10
let number_ex10=20;
console.log(++number_ex10);
console.log(--number_ex10);


// Exercise 11
let num1_ex11=67;
let num2_ex11=34;
if(num1_ex11==num2_ex11){
    console.log("Two Numbers are Equal");
}
else if(num1_ex11===num2_ex11){
    console.log("Two Numbers values and datatypes are Equal");
}
else if(num1_ex11>num2_ex11){
    console.log("number 1 Greater Than number 2");
}
else if(num1_ex11<num2_ex11){
    console.log("number 1 Lesser Than number 2");
}
else if(num1_ex11>=num2_ex11){
    console.log("number 1 is greater Than Equal to number 2");
}
else if(num1_ex11<=num2_ex11){
    console.log("number 1 is Lesser Than Equal to number 2");
}
else if(num1_ex11!=num2_ex11){
    console.log("Two Numbers are Not Equal");
}
else{
    console.log("Two Numbers  datatypes are not Equal");
}


// Exercise 12
let value1=true;
let value2=false;
if(value1&&value2){
    console.log("both are True");
}
else if(value1||value2){
    console.log("one value is True");
}
let value3=!value2;
console.log(value3);


// Exercise 13
let x = 10, y = 5;
console.log("Before Swapping the value: x = " + x + ", y = " + y);
x = x + y;
y = x - y;
x = x - y;
console.log("After Swapping the value: x = " + x + ", y = " + y);


// Exercise 14
let n=[56,98,23,90,36];
let len=(n.length);
let sum=0;
n.forEach((Element)=>{
    sum=sum+Element;
    console.log("sum of number is",sum);
})
let avg=sum/len;
console.log("average is",avg);


//Exercise 15
let a=10;
let b=30;
let c=12;
let d=3;
let results_ex15=((a+b)*c)/d;
console.log(results_ex15);


// Exercise 16
let marks={
    tamil:78,
    english:98,
    maths:78,
    science:66,
    social:98
}

let total_Marks=0;
for(let subject in marks){
    total_Marks +=marks[subject];
}
console.log(total_Marks);
let average=total_Marks/5;
console.log("Average is",average);
