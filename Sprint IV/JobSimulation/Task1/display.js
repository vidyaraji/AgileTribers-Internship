let val=localStorage.getItem("StudentData");
val=JSON.parse(val);
if(localStorage.getItem("StudentData")){
    val.forEach(element=>{  
        document.querySelector('.StudentDataCard').innerHTML+=`<div class="card"><div><h2>${element.FullName} </h2><div>${element.Gender} </div><div>${element.RollNum}</div>
        <div>${element.StudentMobileNumber} </div><div>${element.MailId}</div><div> ${element.Department}</div><div> ${element.fatherName}</div><div> ${element.motherName}</div>
        <div>${element.ParentMobileNumber} </div>${element.city}</div></div></div>`
    
    });
}
else{
    document.querySelector('.StudentDataCard').innerHTML+=`<div class="NoData"><p>No Record Found</p></div>`
}

function BackHome(){
    location.href="http://127.0.0.1:5500/studentInfo.html";
}
