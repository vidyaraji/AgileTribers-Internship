let form=document.querySelector('form');
let obj=[],NumArr=[]
let val=localStorage.getItem("Studentdata");
val=JSON.parse(val);
if(localStorage.getItem("Studentdata")){
    val.forEach(element => {
       obj.push(element) 
    });
}


form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let StudentDetails= document.forms.StudentInformation;
    let RollNum=StudentDetails.RollNum.value;
    let Email=StudentDetails.Email.value;
    if(localStorage.getItem("Studentdata")){
        val.forEach(element=>{
            NumArr.push(element['RollNum']);
        });
    }
    if(NumArr.includes(RollNum)){
        alert('RollNumber is Already Registered');
    }
    else if(!Email.includes('@gmail.com')){
        alert("ERROR IN EMAIL ADDRESS");
    }
    else{
        let StudentDetails= document.forms.StudentInformation;
        let Email=StudentDetails.Email.value;
        let RollNum=StudentDetails.RollNum.value;
        let FullName=StudentDetails.FullName.value;
        let Gender=StudentDetails.Gender.value;
        let Department=StudentDetails.Department.value;
        let City=StudentDetails.City.value;
        let value={FullName,Gender,RollNum,Department,Email,City}
        obj.push(value);
        let finalval=JSON.stringify(obj);
        localStorage.setItem("Studentdata",finalval);
        location.href="http://127.0.0.1:5500/JobSimulation/sample.html";
    }    
});