// Exercise 1
let Ex1=[5,2,-7,3,-2,-1];
let Results=Ex1.filter((value)=>{
    return value<0;
})
console.log("EX1",Results)

//Exercise 2
let Ex2=[5,10,15,20,22,23];
let output=Ex2.map((value)=>{
    return (value%2==0? value:0);
})
console.log("Ex2",output)

//Exercise 3
console.log("Ex3")
let m=0;
do{
    n=parseInt(prompt("enter number"));
    m+=n;
}while(n!=0)
console.log(m);

//Exercise 4
console.log("Ex4")
let Ex4=[];
for(i=0;i<10;i++){
    Ex4[i]=i+1;
}
let Ex4_output=Ex4.reduce((Acc,curr)=>{
    return Acc+curr;
})
console.log("Sum Of Current And Previous",Ex4_output);

//Exercise 5
console.log("Ex5")
let Ex5=[];
for(i=10;i<=55;i++){
    Ex5.push(i);
}
let odd=0;
let even=0;
for(i=0;i<Ex5.length;i++){
    if(Ex5[i]%2==0){
        odd++;
    }
    else{
        even++;
    }

}
console.log("Number of ODD numbers in the range(10,55) is",odd);
console.log("Number of Even numbers in the range(10,55) is",even);
