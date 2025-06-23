let TitleOfTask=[];
document.querySelector('.AddTask').addEventListener('click',()=>{
    document.querySelector('.AddNewTask').style.display="flex";
    document.querySelector('.AddNewTask').style.zIndex="1";
    document.querySelector('.Main').style.backgroundColor="rgb(153,153,153)";
})

function Close(){
    document.querySelector('.AddNewTask').style.display="none";
    document.querySelector('.Main').style.backgroundColor="white";
    document.querySelector('.Update').style.display="none";
    document.querySelector('.AddTo').style.display="block";
}
let TaskDetails=document.forms.AddTaskForm;
document.querySelector('.buttons').addEventListener('click',(event)=>{
    event.preventDefault();
    let TaskDetails=document.forms.AddTaskForm;
    let TaskName=TaskDetails.TaskName.value;
    let TaskDesc=TaskDetails.Description.value;
    let DueDate=TaskDetails.DueDate.value;
    let Assignee=TaskDetails.Assignee.value;
    let className;
    if(Assignee=="Lokesh"){
        Assignee="profile1.png",className="profile1";
    }
     if(Assignee=="Ashwin"){
        Assignee="profile2.png",className="profile2";
    }
     if(Assignee=="Sanjay"){
       Assignee="profile3.png",className="profile3";
    }
     if(Assignee=="Shreya"){
       Assignee="profile4.jpeg",className="profile4";
    }
    if(!TaskName=="" && !TaskDesc=="" && !DueDate=="" && !Assignee==""){
        if (event.target.innerText=="New Task"){
            document.querySelector('.Bugs1').innerHTML+=`<div class="NewTaskBugs ${className}">
                        <div class="title">${TaskName}</div>
                        <div class="profile">
                            <div><img src=${Assignee} width="40px" border="2px"></div>
                            <div>${TaskDesc}</div>
                        </div>
                        <div class="date">
                            <p style="font-weight: bold;">Due Date</p>
                            <p>${DueDate}</p>
                        </div>
                        <button class="Edit" onclick="Edit(event)"><u>Edit</u></button>
                            <button class="delete" onclick="Delete(event)"><u>delete</u></button>
    
                    </div>`
                    TitleOfTask.push(TaskName);
            Close();
        }
        if (event.target.innerText=="scheduled Task"){
            document.querySelector('.Bugs2').innerHTML+=`<div class="ScheduledBugs ${className}">
                        <div class="title">${TaskName}</div>
                        <div class="profile">
                            <div><img src=${Assignee} width="40px" border="2px"></div>
                            <div>${TaskDesc}</div>
                        </div>
                        <div class="date">
                            <p style="font-weight: bold;">Due Date</p>
                            <p>${DueDate}</p>
                        </div>
                        <button class="Edit" onclick="Edit(event)"><u>Edit</u></button>
                            <button class="delete" onclick="Delete(event)"><u>delete</u></button>
    
                    </div>`
                    TitleOfTask.push(TaskName);
            Close();
        }
        if(event.target.innerText=="Inprogress"){
            document.querySelector('.Bugs3').innerHTML+=`<div class="InprogressBugs ${className}">
                        <div class="title">${TaskName}</div>
                        <div class="profile">
                            <div><img src=${Assignee} width="40px" border="2px"></div>
                            <div>${TaskDesc}</div>
                        </div>
                        <div class="date">
                            <p style="font-weight: bold;">Due Date</p>
                            <p>${DueDate}</p>
                        </div>
                        <button class="Edit" onclick="Edit(event)"><u>Edit</u></button>
                            <button class="delete" onclick="Delete(event)"><u>delete</u></button>
    
                    </div>`
                    TitleOfTask.push(TaskName);
            Close();
        }
    }
    else{
        alert("Field Are Empty");
    }

    TaskDetails.TaskName.value="";
    TaskDetails.Description.value="";
    TaskDetails.DueDate.value="";
    TaskDetails.Assignee.value="";
});
let src;
function Edit(event){
    let classEl=event.target.parentNode.parentNode;
    let TaskDetails=document.forms.AddTaskForm;
    TaskDetails.TaskName.value=event.target.parentNode.parentNode.children[0].innerText;
    TaskDetails.Description.value=event.target.parentNode.parentNode.children[1].innerText;
    TaskDetails.DueDate.value=event.target.parentNode.parentNode.children[2].children[1].innerText;
    src=event.target.parentNode.parentNode.children[1].children[0].children[0].src;
    if(src=="http://127.0.0.1:5500/profile1.png"){
        Assignee="Lokesh";
    }
    if(src=="http://127.0.0.1:5500/profile2.png"){
        Assignee="Ashwin"
    }
    if(src=="http://127.0.0.1:5500/profile3.png"){
        Assignee="Sanjay";
    }
    if(src=="http://127.0.0.1:5500/profile4.jpeg"){
        Assignee="Shreya";
    }
    TaskDetails.Assignee.value=Assignee;
    document.querySelector('.AddNewTask').style.display="flex";
    document.querySelector('.AddNewTask').style.zIndex="1";
    document.querySelector('.Main').style.backgroundColor="rgb(153,153,153)";
    document.querySelector('.Update').style.display="block";
    document.querySelector('.AddTo').style.display="none";
    
    document.querySelector('.UpdateBtn').addEventListener('click',(e)=>{
        e.preventDefault();
        event.target.parentNode.parentNode.children[0].innerText=TaskDetails.TaskName.value;
        event.target.parentNode.parentNode.children[1].children[1].innerText=TaskDetails.Description.value;
        event.target.parentNode.parentNode.children[2].children[1].innerText=TaskDetails.DueDate.value;
        if(TaskDetails.Assignee.value=="Lokesh"){
            Assignee="profile1.png";
            classEl.classList.remove(classEl.classList[1]);
            classEl.classList.add("profile1");
        }
        if(TaskDetails.Assignee.value=="Ashwin"){
            Assignee="profile2.png";
            classEl.classList.remove(classEl.classList[1]);
            classEl.classList.add("profile2");
        }
        if(TaskDetails.Assignee.value=="Sanjay"){
            Assignee="profile3.png";
            classEl.classList.remove(classEl.classList[1]);
            classEl.classList.add("profile3");
        }
        if(TaskDetails.Assignee.value=="Shreya"){
            Assignee="profile4.jpeg";
            classEl.classList.remove(classEl.classList[1]);
            classEl.classList.add("profile4");
        }
        event.target.parentNode.parentNode.children[1].children[0].children[0].attributes[0].value=Assignee;
        document.querySelector('.Update').style.display="none";
        document.querySelector('.AddTo').style.display="block";
        Close();
    });
}

function Delete(event){
    let delEl=event.target.parentNode.parentNode;
    delEl.remove();
}


function InputSearch(){
    let searchVal=document.querySelector('.inputSearch').value;
    let NewTaskElement=document.querySelectorAll('.NewTaskBugs');
    let ScheduledEL=document.querySelectorAll('.ScheduledBugs');
    let InProgressEL=document.querySelectorAll('.InprogressBugs');
    let CompletedTaskEL=document.querySelectorAll('.CompletedBugs');
    let flag=true;
    NewTaskElement.forEach(element=>{
        if(element.children[0].innerText.toLowerCase().includes(searchVal)){
            let Resulted=element.outerHTML;
            document.querySelector('.Bugs1').innerHTML=Resulted;
            flag=false;
        }
    });
    if(flag==true){
        document.querySelector('.Bugs1').innerHTML=`<h3>No Results Found</h3>`
    }
    ScheduledEL.forEach(element=>{
        if(element.children[0].innerText.toLowerCase().includes(searchVal)){
            let Resulted=element.outerHTML;
            document.querySelector('.Bugs2').innerHTML=Resulted;
            flag=false;
        }
    })
    if(flag==true){
        document.querySelector('.Bugs2').innerHTML=`<h3>No Results Found</h3>`
    }
    flag=true;
    InProgressEL.forEach(element=>{
        if(element.children[0].innerText.toLowerCase().includes(searchVal)){
            let Resulted=element.outerHTML;
            document.querySelector('.Bugs3').innerHTML=Resulted;
            flag=false;
        }
    });
    if(flag==true){
        document.querySelector('.Bugs3').innerHTML=`<h3>No Results Found</h3>`
    }
    flag=true;
    CompletedTaskEL.forEach(element=>{
        if(element.children[0].innerText.toLowerCase().includes(searchVal)){
            let Resulted=element.outerHTML;
            document.querySelector('.Bugs4').innerHTML=Resulted;
            flag=false;
        }
    });
    if(flag==true){
        document.querySelector('.Bugs4').innerHTML=`<h3>No Results Found</h3>`
    }
    if (searchVal==""){
        window.onload;
    }
};