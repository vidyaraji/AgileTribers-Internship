// Exercise 2
arrEx2=[[10,2],[4,54]];
let operation=prompt(`enter the operation:\n string or add`);
switch(operation){
    case "add":
        addEx2();
        break
        case "string":
            stringEx2();
            break
            default:
                console.log("enter correct operator");
        break;
}

function addEx2(){
    let res=0;
    for(let i of arrEx2){
        for(let j of i){
            res+=j;
        }
    }
    console.log(res)
}
function stringEx2(){
    let res=[];
    for(let i of arrEx2){
        for(let j of i){
            res.push(j);
        }
    }
    console.log(res);
}



//Exercise 4
arrEx4=[0,4,34,0,22,77];
for(i=0;i<arrEx4.length;i++){
    if(arrEx4[i]==0){
        arrEx4.splice(i,1);
        arrEx4.push(0);
    }
}
console.log(arrEx4);



//Exercise 5
function toRemovespaces(str){
    let res="";
    for(let i of str){
        if(i!=" "){
           res+=i;
        }
    }
    return res;
}
console.log(toRemovespaces("Kumaran raj"))



//Exercise 6
let xEx6=23;
let yEx6=66;
console.log(xEx6,yEx6);
xEx6=xEx6+yEx6;
yEx6=xEx6-yEx6;
xEx6=xEx6-yEx6;
console.log(xEx6,yEx6);



//Exercise 7
function toCheckAnagram(str1,str2){
   if(str1.length!=str2.length){
    return "not a anagram";
   }
   else{
    str1=str1.split("");
    str2=str2.split("");
    str1.sort();
    str2.sort();
    for(i=0;i<str1.length;i++){
        if(str1[i]!=str2[i]){
            return "not a anagram";
        }
        return "its anagram";
    }
   }
}
console.log(toCheckAnagram("top","pot"));
console.log(toCheckAnagram("hello","hi"));



