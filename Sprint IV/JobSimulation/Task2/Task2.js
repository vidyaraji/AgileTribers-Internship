let BookName= document.getElementById('BookName');
let BookAuthor=document.getElementById('BookAuthor');
let Books= document.querySelector('.books');
let addbtn=document.querySelector('.addbtn');
let editbtn=document.querySelector('.editbtn');
editbtn.style.display="none";
addbtn.addEventListener('click',()=>{
    if(BookName.value==""&& BookAuthor.value==""){
        alert("Enter The Fields");
    }
    Books.innerHTML+=`<div class="list">
                    <div class="names"><li><span class="NameOfBook">${BookName.value}</span> By <span class="AuthorOfBook">${BookAuthor.value}</span></li></div>
                    <div><div class="edit" onclick="editfunc(event)">Edit</div><div class="delete" onclick="delfunc(event)">Delete</div></div></div>`;
    
    BookName.value="";
    BookAuthor.value="";
})

function editfunc(event){
addbtn.style.display="none";
editbtn.style.display="inline";
targetEl=event.target.parentNode.parentNode.children[0].children;
BookName.value=targetEl[0].children[0].innerText;
BookAuthor.value=targetEl[0].children[1].innerText;
editbtn.addEventListener('click',()=>{
    targetEl[0].children[0].innerText=BookName.value;
    targetEl[0].children[1].innerText=BookAuthor.value;
    BookName.value="";
    BookAuthor.value="";
    addbtn.style.display="inline";
    editbtn.style.display="none";
})
}

function delfunc(event){
    targetEl=event.target.parentNode.parentNode;
    targetEl.remove();
}
