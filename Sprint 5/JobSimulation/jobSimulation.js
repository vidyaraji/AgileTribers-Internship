let Students=document.querySelector('.Students');
let Projects=document.querySelector('.Projects');
let Subjects=document.querySelector('.Subjects');

function StudentNo(){
    let studentsName=document.querySelectorAll('.Students table tr');
    let length=studentsName.length
    document.querySelector('.ListHeader .StudentsNo span').innerText=length-1;
}

function ProjectsNo(){
    let studentsName=document.querySelectorAll('.Projects table tr');
    let length=studentsName.length
    document.querySelector('.ListHeader .ProjectsNo span').innerText=length-1;
}

function SubjectsNo(){
    let studentsName=document.querySelectorAll('.Subjects table tr');
    let length=studentsName.length
    document.querySelector('.ListHeader .SubjectsNo span').innerText=length-1;
}


Students.addEventListener('click',(event)=>{
    let element=event.target;
    if(element.innerText=='Add'){
        let name=document.querySelector('.Student').value;
        let RegNo=document.querySelector('.regNo').value;
        let Date=document.querySelector('.date').value;
        document.querySelector('.Students table').innerHTML+=`<tr>
                                    <td>${name}</td>
                                    <td>${RegNo}</td>
                                    <td>${Date}</td>
                                <td><button>Edit</button> <button>Delete</button></td>
                                </tr>`
        StudentNo();
        document.querySelector('.Student').value="";
        document.querySelector('.regNo').value="";
        document.querySelector('.date').value="";
    }
    if(element.innerText=='Edit'){
        let trEl=element.closest('tr');
        let name=trEl.children[0].innerText;
        let RegNo=trEl.children[1].innerText;
        let date=trEl.children[2].innerText;
        document.querySelector('.Student').value=name;
        document.querySelector('.regNo').value=RegNo;
        document.querySelector('.date').value=date;
        let update=document.querySelector('.Students .Edit');
        update.style.display="inline";
        document.querySelector('.Students .Add').style.display="none";
        update.addEventListener('click',()=>{
        trEl.children[0].innerText=document.querySelector('.Student').value;
        trEl.children[1].innerText=document.querySelector('.regNo').value;
        trEl.children[2].innerText=document.querySelector('.date').value;
        document.querySelector('.Students .Add').style.display="inline";
        update.style.display="none";
        document.querySelector('.Student').value="";
        document.querySelector('.regNo').value="";
        document.querySelector('.date').value="";
        })
    }
    if(element.innerText=='Delete'){
        deleteEl=element.parentNode.parentNode;
        deleteEl.remove()
        StudentNo();
    }
})


Projects.addEventListener('click',(event)=>{
    let element=event.target;
    if(element.innerText=='Add'){
        let projects=document.querySelector('.projects').value;
        let projectsHandled=document.querySelector('.projectsHandled').value;
        document.querySelector('.Projects table').innerHTML+=`<tr>
                                    <td>${projects}</td>
                                    <td>${projectsHandled}</td>
                                <td><button>Edit</button> <button>Delete</button></td>
                                </tr>`
        ProjectsNo();
         document.querySelector('.projects').value="";
        document.querySelector('.projectsHandled').value="";
    }
    if(element.innerText=='Edit'){
        let trEl=element.closest('tr');
        let projects=trEl.children[0].innerText;
        let projectsHandled=trEl.children[1].innerText;
        document.querySelector('.projects').value=projects;
        document.querySelector('.projectsHandled').value=projectsHandled;
        let update=document.querySelector('.Projects .Edit');
        update.style.display="inline";
        document.querySelector('.Projects .Add').style.display="none";
        update.addEventListener('click',()=>{
        trEl.children[0].innerText=document.querySelector('.projects').value;
        trEl.children[1].innerText=document.querySelector('.projectsHandled').value;
        document.querySelector('.Projects .Add').style.display="inline";
        update.style.display="none";
        document.querySelector('.projects').value="";
        document.querySelector('.projectsHandled').value="";
        })
    }
    if(element.innerText=='Delete'){
        deleteEl=element.parentNode.parentNode;
        deleteEl.remove()
        ProjectsNo();
    }
})

Subjects.addEventListener('click',(event)=>{
    let element=event.target;
    if(element.innerText=='Add'){
        let subject=document.querySelector('.subject').value;
        let subjectHandle=document.querySelector('.subjectHandle').value;
        document.querySelector('.Subjects table').innerHTML+=`<tr>
                                    <td>${subject}</td>
                                    <td>${subjectHandle}</td>
                                <td><button>Edit</button> <button>Delete</button></td>
                                </tr>`
        SubjectsNo();
        document.querySelector('.subject').value="";
        document.querySelector('.subjectHandle').value="";
    }
    if(element.innerText=='Edit'){
        let trEl=element.closest('tr');
        let subject=trEl.children[0].innerText;
        let subjectHandle=trEl.children[1].innerText;
        document.querySelector('.subject').value=subject;
        document.querySelector('.subjectHandle').value=subjectHandle;
        let update=document.querySelector('.Subjects .Edit');
        update.style.display="inline";
        document.querySelector('.Subjects .Add').style.display="none";
        update.addEventListener('click',()=>{
        trEl.children[0].innerText=document.querySelector('.subject').value;
        trEl.children[1].innerText=document.querySelector('.subjectHandle').value;
        document.querySelector('.Subjects .Add').style.display="inline";
        update.style.display="none";
        document.querySelector('.subject').value="";
        document.querySelector('.subjectHandle').value="";
        })
    }
    if(element.innerText=='Delete'){
        deleteEl=element.parentNode.parentNode;
        deleteEl.remove()
        SubjectsNo();
    }
});



function Search(event){
    value=event.target.value;
    targetEL=event.target.parentNode.parentNode.parentNode.classList[1];
        targetEl1=document.querySelectorAll(`.${targetEL} table tr`);
        targetEl1.forEach(element => {
            result=element.children[0].innerText;
            if(result.includes(value)){
                header=document.querySelector(`.${targetEL} table tr`).outerHTML;  
                document.querySelector(`.${targetEL} table `).innerHTML=header+element.outerHTML;
            }
            else{
                header=document.querySelector(`.${targetEL} table tr`).outerHTML;
                document.querySelector(`.${targetEL} table `).innerHTML=header+`<tr>No Records Found</tr>`
            }
        });
}
