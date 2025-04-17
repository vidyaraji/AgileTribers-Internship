let dataEntriesAss=[];
let dataEntriesSem=[];

function assignmentbtn(){
    document.querySelector('#seminors').style.display="none";
    document.querySelector('#addAssign').style.display="none";
    document.querySelector('#addingStudents').style.display="inline";   
    document.querySelector('#sem').style.display="none"; 
}


function seminorbtn(){
    document.querySelector('#assignments').style.display="none";
    document.querySelector('#addSem').style.display="none";
    document.querySelector('#addingStudents').style.display="inline"; 
    document.querySelector('#ass').style.display="none";  
}


function addStudentAss(){
    let value=document.querySelector('#addingStudents input').value;
    if(value==""){
        alert("Enter Student Name")
    }
    else{
        document.querySelector('.searchNames').style.display="inline";
        let assignEl=document.querySelector('#assignments div ol');
        dataEntriesAss.push(value);
        assignEl.innerHTML+=`<div class="studlist">
        <li><div class="value">${value.toUpperCase()}</div>
        <div><div id="edit" onclick="edit(event)">📝</div><div id="dlt" onclick="dlt(event)">❌</div></div>
        </li></div>`
        document.querySelector('.Successfull').style.display="block";
        setTimeout(() => {
        document.querySelector('.Successfull').style.display="none";
    }, 3000);
}
    document.querySelector('#addingStudents input').value="";
}


function dlt(event){
    targetEl=event.target.parentNode.parentNode.parentNode;
    targetEl.remove();
}

function edit(event){   
    let value=event.target.parentNode.parentNode.children[0].innerText;
    document.querySelector('#addingStudents input').value=value;
    targetEl=event.target.parentNode.parentNode.parentNode;
    targetEl.remove();
}

function addStudentSem(){
    let value=document.querySelector('#addingStudents input').value;
    if(value==""){
        alert("Enter Student Name")
    }
    else{
        document.querySelector('.searchNamesSem').style.display="inline";
        let assignEl=document.querySelector('#seminors div ol');
        dataEntriesSem.push(value);
        assignEl.innerHTML+=`<div class="studlist">
        <li><div class="value">${value.toUpperCase()}</div>
        <div><div id="edit" onclick="edit(event)">📝</div><div id="dlt" onclick="dlt(event)">❌</div></div>
        </li></div>`
        document.querySelector('.Successfull').style.display="block";
        setTimeout(() => {
        document.querySelector('.Successfull').style.display="none";
    }, 3000);
    }
    document.querySelector('#addingStudents input').value="";
}

function search(event){
    searchingName=event.target.parentNode.children[0].value;
    if(dataEntriesAss.find(Element=>Element===searchingName)){
        targetValue=dataEntriesAss.find(Element=>Element===searchingName);
        let assignEl=document.querySelector('#assignments div ol');
        assignEl.innerHTML=`<div class="studlist">
        <li><div class="value">${targetValue.toUpperCase()}</div>
        <div><div id="edit" onclick="edit(event)">📝</div><div id="dlt" onclick="dlt(event)">❌</div></div>
        </li></div>`
    }
    else{
        alert("Name is Not Found");
    }
    event.target.parentNode.children[0].value=""
}

function search(event){
    searchingName=event.target.parentNode.children[0].value;
    if(dataEntriesSem.find(Element=>Element===searchingName)){
        targetValue=dataEntriesSem.find(Element=>Element===searchingName);
        let assignEl=document.querySelector('#seminors div ol');
        assignEl.innerHTML=`<div class="studlist">
        <li><div class="value">${targetValue.toUpperCase()}</div>
        <div><div id="edit" onclick="edit(event)">📝</div><div id="dlt" onclick="dlt(event)">❌</div></div>
        </li></div>`
    }
    else{
        alert("Name is Not Found");
    }
    event.target.parentNode.children[0].value=""
}