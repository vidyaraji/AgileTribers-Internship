//Exercise 1
for(i=1;i<10;i++){
    let count=0;
    for(j=1;j<i;j++){
        if(i!=j&&i%j==0){
            count++;
        }      
    }
    if(count==1){
        console.log(`${i} is prime number`);
    }
}

//Exercise 2
for(i=1;i<=20;i++){
    if(i%2==0){
        console.log(`Even Numbers: ${i}`)
    }
}

//Exercise 3
for(i=1;i<=20;i++){
    if(i%2!=0){
        console.log(`Odd Numbers: ${i}`)
    }
}

//Exercise 4
function factorial(fact){
    let res=1;
    for(i=1;i<=fact;i++){
        res*=i;
    }
    return res;
}
console.log(factorial(5));

//Exercise 5
let sumEx5=0;
for(i=1;i<=100;i++){
    sumEx5+=i;
}
console.log(sumEx5);


//Exercise 6
let n=100;
let sumEx6=0;
let count=0;
for(i=1;i<=n;i++){
    sumEx6+=i;
}
console.log("Average:",sumEx6/n);


//Exercise 7
for(i=1;i<5;i++){
    let str="";
    for(j=1;j<5;j++){
        str+="* ";
    }
    console.log(str)
}
console.log("\n");
for(i=1;i<5;i++){
    space="";
    str="";
    for(k=4;k>i;k--){
        space+=" ";
    }
    for(j=1;j<=i;j++){
        str+="* "
    }
    console.log(space,str);
}
console.log(`\n`);
for(i=1;i<5;i++){
    str="";
    space="";
    for(k=4;k>i;k--){
        space+=" ";
    }
    for(j=1;j<=i;j++){
        str+="* ";
    }
    console.log(space,str)
    if(i==4){
        for(i=1;i<5;i++){
            str="";
            space="";
            for(k=1;k<i;k++){
                space+=" ";
            }
            for(j=4;j>=i;j--){
                str+="* "
            }
            console.log(space,str);
        }
    }
}



//Exercise 8
for(i=1;i<=5;i++){
    console.log(i)
}

//Exercise 9
for(i=1;i<=10;i++){
    console.log(i)
}


//Exercise 10
arrEx10=[30,23,45,76,30]
if(arrEx10[0]===arrEx10[arrEx10.length-1]){
    console.log("True");
}
else{
    console.log("False");
}


//Exercise 11
arrEx11=[32,45,65,67,77,25];
arrEx11.forEach(element => {
    if(element%5==0){
        console.log(element);
    }
});


//Exercise 12
function toCheckVowel(n){
    switch(n){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("It is Vowel");
        break;
    default:
        console.log("It is Constant");
    }
}
toCheckVowel("A");


//Exercise 13
let oddcount=0;
let evencount=0;
for(i=10;i<=55;i++){
    if(i%2===0){
        evencount++;
    }
    else{
        oddcount++;
    }
}
console.log("Odd Count:",oddcount);
console.log("Even Count:",evencount);


//Exercise 14
for(i=1;i<=25;i++){
    if(i%5!=0){
        console.log(i);
    }
}



//Exercise 15
let arrEx15=[6,4,7,9,8];
let resEx15=[];
arrEx15.forEach(element=>{
    let res=1;
    for(i=1;i<=element;i++){
        res*=i;
    }
    resEx15.push(res)
})
console.log(resEx15);


//Exercise 16
function Ex16(a,b){
    if((a*b)>500){
        console.log("Addition",a+b);
    }
    else{
        console.log("Multiplication",a*b);
    }
}
Ex16(34,45);


//Exercise 17
let a=45;
let b=85;
console.log((a>b)?"a is greater than":"b is greater than a");


//Exercise 18
let aEx18=78;
let bEx18=36;
let cEx18=89;
if(aEx18>bEx18 && aEx18>cEx18){
    console.log(aEx18, "is greater");
}
else if(bEx18>aEx18 && bEx18>cEx18){
    console.log(bEx18, "is greater");
}
else{
    console.log(cEx18,"is greater");
}


//Exercise 19
let listEx19=[2,-56,-23,67,45,-9];
let resEx19=[];
for(let i of listEx19){
    if(i>=0){
        resEx19.unshift(i);
    }
    else{
        resEx19.push(i)
    }
}
console.log(resEx19);
