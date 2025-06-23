function registerPage(){
    let LogInDetails=document.forms.LogInform;
    let UserName=LogInDetails.admin.value;
    let Password=LogInDetails.password.value;
    if(UserName=="Admin@123" && Password=="vidya"){
        document.querySelector('.welcomeBoard').style.display="none";
        document.querySelector('.container').style.display="flex";
    }
    else{
        alert("Invalid UserName or Password");
    }
}
document.querySelector('.StudReg').addEventListener('click',()=>{
    document.querySelector('.HomePage').style.display="none";
    document.querySelector('.welcomeBoard').style.display="flex";
})
let obj=[],DepartmentArr=[],RollNumArr=[];
let val=localStorage.getItem("StudentData");
val=JSON.parse(val);
if(localStorage.getItem("StudentData")){
    val.forEach(element => {
        obj.push(element);
    });
}

document.querySelector('.form').addEventListener('submit',function(event){
    event.preventDefault();
    let StudentDetails= document.forms.StudentInformation;
    let RollNum=StudentDetails.RollNum.value;
    let Department=StudentDetails.Department.value;
    let MailId=StudentDetails.MailId.value;
    if(localStorage.getItem("StudentData")){
        val.forEach(element=>{
            DepartmentArr.push(element.Department);
            RollNumArr.push(element.RollNum);
        })
    }
    if (DepartmentArr.includes(Department) && (RollNumArr.includes(RollNum))){
            alert("ROllNUMBER ALREADY REGISTERED");
            console.log("else part");
    }
    else if((!MailId.includes('@gmail.com')) && (MailId.includes(' '))){
        alert("Enter Mail id Correctly");
    }
    else{
        let FullName=StudentDetails.FullName.value;
        let Gender=StudentDetails.Gender.value;
        let RollNum=StudentDetails.RollNum.value;
        let StudentMobileNumber=StudentDetails.StudentMobileNumber.value;
        let MailId=StudentDetails.MailId.value;
        let Department=StudentDetails.Department.value;
        let fatherName=StudentDetails.fatherName.value;
        let motherName=StudentDetails.motherName.value;
        let ParentMobileNumber=StudentDetails.ParentMobileNumber.value;
        let city=StudentDetails.city.value;
        val={FullName,Gender,RollNum,StudentMobileNumber,MailId,Department,fatherName,motherName,ParentMobileNumber,city};
        obj.push(val);
        let finalData=JSON.stringify(obj);
        localStorage.setItem("StudentData",finalData);
        location.href="http://127.0.0.1:5500/display.html"
    }
});
