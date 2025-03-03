//Exercise 1
function Ex1( num1_Ex1,num2_Ex1){
    res= num1_Ex1*num2_Ex1;
    if(res>500){
        console.log("Sum is",num1_Ex1+num2_Ex1);
    }
    else{
        console.log("Product is",res);
    }
}
Ex1(55,85);

//Exercise 2
let a=32;
b=45;
c=98;
if(a>b && a>c){
    console.log(`${a} is greater`);
}
else if(b>a && b>c){
    console.log(`${b} is greater`);
}
else{
    console.log(`${c} is greater`);
}

//Exercise 3
let arrEx3=[1,4,89,1,4,90,23];
let arr2Ex3=[];
arrEx3.forEach(Element=>{
    if(!arr2Ex3.includes(Element)){
        arr2Ex3.push(Element);
    }
})
console.log(arr2Ex3);


//Exercise 4
let arrEx4=[1,2,3,1,5,2];
let arr2Ex4=[];
let remove=1;
arr2Ex4=arrEx4.map((Element)=>{
    return (Element==remove)?"-":Element;
})
console.log(arr2Ex4);


//Exercise 5
let arrEx5=[1,3,2,4,5,3];
arrEx5.forEach((element,index) => {
    if(arrEx5.indexOf(element)!=index){
        resEx5 ="True";
    }
    else{
        resEx5= "False";
    }
});
console.log(resEx5)


//Exercise 6
function resEx6(n){
    while(n>9){
        n=Array.from(String(n),Number).reduce((Acc,Curr)=>
            Acc+Curr,0);
        }
        return n;
    }

console.log(resEx6(567));


//Exercise 7
function Ex7(n){
    for(i=0;i<n.length;){
        if(n[i]===0){
            n.splice(i+1,0,0);
            n.pop();
            i+=2;
        }
        else{
            i+=1;
        }
    }
   return n;
}
console.log(Ex7([1,0,3,0,4,5]))

//Exercise 8
num1Ex8=[1,2,3,5];
num2Ex8=[2,6,8,3];
let resEx8=num1Ex8.filter((item)=>
    num2Ex8.includes(item));
console.log(resEx8);
