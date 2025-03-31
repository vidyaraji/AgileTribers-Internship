let radioValue=document.querySelectorAll('input[name="color"]');
let btn=document.getElementById('btn');
let btnclass=document.querySelector('#btn');

btn.addEventListener('click',()=>{
    for(colors of radioValue){
        if(colors.checked){
            document.getElementById('Ex1res').innerHTML=`Your Favourite Color is ${colors.value}`;
            console.log(colors.value);
        }
    }
})

let checkboxValue= document.querySelectorAll('input[type="checkbox"]');
let btn1=document.querySelector('#btn1');
btn1.addEventListener('click',()=>{
    for(val of checkboxValue){
        if(val.checked){
            document.getElementById('Ex1res1').innerHTML+="You Selected Teams are "+`${val.value}<br>`;
        }
    }
})

//Exercise 2
document.getElementById('title').innerHTML="Pillars Of IPL's";
document.querySelector('#box').style.color="red";
let styleVal=document.querySelectorAll('#box');
for(style of styleVal){
    style.style.fontSize="30px";
    style.style.textAlign="center";
    style.style.fontWeight="bold";
}
