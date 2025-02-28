// Exercise 1
let ex1=-43;
if(ex1>0){
    console.log(" It's a Positive Integer");
}
else if(ex1<0){
    console.log("It's a Negative Integer");
}
else if(ex1==0){
    console.log("Its zero");
}
else{
    console.log("enter correct Number")
}


//Exercise 2
function toCheckEvenOrAdd(n){
    if(n%2==0){
        console.log("Its Odd Number");
    }
    else{
        console.log("Its Even Number");
    }
}
toCheckEvenOrAdd(3891);

//Exercise 3
let number=98;
let power=23;
let Result=number**power;
console.log(`Result:${Result}`);

//Exercise 4
let Ex4_num1=465;
let Ex4_num2=852;
if(Ex4_num1>Ex4_num2){
    console.log(`${Ex4_num1} is Greater Than ${Ex4_num2}`)
}
else if(Ex4_num1==Ex4_num2){
    console.log("Both are Equal")
}
else if(Ex4_num1<Ex4_num2){
    console.log(`${Ex4_num1} is Lesser Than ${Ex4_num2}`)
}
else{
    console.log("Enter The Correct Number");
}

//Exercise 5
let Ex5_Year=2000;
if(Ex5_Year/4==1 && Ex5_Year/100!=1||Ex5_Year/400==1){
    console.log(`${Ex5_Year} is a Leap Year`);
}
else{
    console.log(`${Ex5_Year} is not a  Leap Year`);
}


//Exercise 6
let mark=69;
if(mark>=90 && mark<=100){
    console.log("GRADE A");
}
else if(mark>=80 && mark<=89){
    console.log("GRADE B");
}
else if(mark>=70 && mark<=79){
    console.log("GRADE C");
}
else if(mark>=60 && mark<=69){
    console.log("GRADE D");
}
else{
    console.log("GRADE F")
}

//Exercise 7
let age=43;
if(age<16){
    console.log("You Can't Drive");
}
else if(age>=16 && age<=17){
    console.log("You Can Drive But Not Vote");
}
else if(age>=18 && age<=24){
    console.log("You Can Vote But Not Rent A Car");
}
else{
    console.log("You Can do Pretty Much Anything");
}


//Exercise 8
for(i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else{
        console.log(i)
    }
}


//Exercise 9
let Ex9_Year=1900;
if(Ex9_Year/4==1 && Ex9_Year/100!=1||Ex9_Year/400==1){
    console.log(`${Ex9_Year} is a Leap Year`);
}
else{
    console.log(`${Ex9_Year} is not a  Leap Year`);
}
