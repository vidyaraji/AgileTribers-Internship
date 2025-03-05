let i=0;
let data=[
    {
        no:1,
        NAME:"Answers to 10 big Questions",
        AUTHOR:"Stephen Hawking",
        CATEGORY:"science"
    }
];
function readAll(){
    localStorage.setItem("object",JSON.stringify(data));
    let tableBooks=document.querySelector(".books");
    let object=localStorage.getItem('object');
    let entries=JSON.parse(object);
    let elements="";
    entries.map(records=>(
        elements+=`<tr>
        <td>${records.no}</td>
        <td>${records.NAME}</td>
        <td>${records.AUTHOR}</td>
        <td>${records.CATEGORY}</td>
        <td><button class="edit" onclick={edit(${records.no})}>EDIT</button>
        <button onclick={dlt(${records.no})}>DELETE</button></td>
        </tr>`
    ));
    tableBooks.innerHTML=elements;
    i+=1;
}
function add(){
    let name=document.querySelector(".name").value;
    let author=document.querySelector(".author").value;
    let category=document.querySelector(".category").value;
    let newObj={no:i+1,NAME:name,AUTHOR:author,CATEGORY:category};
    data.push(newObj);
    document.querySelector(".name").value="";
    document.querySelector(".author").value="";
    document.querySelector(".category").value="";
    readAll();
}
function edit(no){
    document.querySelector(".updateBook").style.display="flex";
    document.querySelector(".addBook").style.display="none";
    let obj=data.find(rec=>rec.no===no);
    document.querySelector(".nameUpdate").value=obj.NAME;
    document.querySelector(".authorUpdate").value=obj.AUTHOR;
    document.querySelector(".categoryUpdate").value=obj.CATEGORY;
    document.querySelector(".no").value=obj.no;


}
function update(){
    let no=parseInt(document.querySelector(".no").value);
    let name=document.querySelector(".nameUpdate").value;
    let author=document.querySelector(".authorUpdate").value;
    let category=document.querySelector(".categoryUpdate").value;
    let index=data.findIndex(rec=>rec.no===no);
    data[index]={no:no,NAME:name,AUTHOR:author,CATEGORY:category};
    readAll()
    document.querySelector(".updateBook").style.display="none";
    document.querySelector(".addBook").style.display="flex";
    document.querySelector(".name").value="";
    document.querySelector(".author").value="";
    document.querySelector(".category").value="";
}
function dlt(no){
    data=data.filter(rec=>rec.no!=no);
    readAll()
}
function search(){
    let value=document.querySelector(".searchBook").value;
    data=data.filter(rec=>rec.NAME===value);
    readAll();
}




