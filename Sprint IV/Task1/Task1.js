/*Exercise 1*/
let Ex1=document.getElementById('Ex1');
Ex1.addEventListener('click',()=>{
    console.log("Button Clicked!!")
})


/*Exercise 2*/
let Ex2=document.getElementById('Ex2');
Ex2.addEventListener('click',()=>{
    let a=20;
    let b=30;
    console.log(`SUM:`,a+b);
})


/*Exercise 3*/
let Ex3=document.getElementById('Ex3');
Ex3.addEventListener('click',()=>{
    let data=document.querySelector('#Ex3Value');
    console.log(data.value)
    data.value="";
})


/*Exercise 4*/
let Ex4=document.getElementById('Ex4');
let a=document.getElementById('Ex4Value');
let b=document.getElementById('Ex4inp');
Ex4.addEventListener('click',()=>{
    a.innerHTML=`<p><bold> ${b.value}</bold></p>`;
    console.log(a.value)
})



/*Exercise 5*/
let aEx5=document.getElementById('Ex5Value');
let bEx5=document.getElementById('Ex5');
aEx5.addEventListener('change',(event)=>{
    console.log(event.target.value);
    bEx5.innerHTML=`<h1>Value Changed ${event.target.value}</h1>`;
});




/*Exercise 6*/
let Ex6btn=document.getElementById('Ex6btn');
let Ex6h1=document.getElementById('Ex6');
Ex6btn.addEventListener('dblclick',()=>{
    console.log("Button Was Clicked Twice");
    Ex6h1.innerHTML="Button Was Clicked Twice";
})




/*Exercise 7*/
let Ex7=document.getElementById('Ex7');
Ex7.addEventListener('mouseenter',()=>{
    Ex7.innerHTML=`<h2>Mouse Enter</h2>`;
})
Ex7.addEventListener('mouseleave',()=>{
    Ex7.innerHTML=`<h2>Mouse Leaves</h2>`;
})



/*Exercise 8*/
let Ex8=document.getElementById('Ex8');
Ex8.addEventListener('keypress',()=>{
    console.log("key pressed")
})
Ex8.addEventListener('keyup',()=>{
    console.log("key released")
})