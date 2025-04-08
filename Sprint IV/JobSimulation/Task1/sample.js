let number=1;
let StoredData=localStorage.getItem("Studentdata");
data=JSON.parse(StoredData); 
data.forEach(element => {
    console.log(element)
    document.getElementById('dataEntries').innerHTML+=`<h1>STUDENT ${number}</h1>`
    for(i=0;i<6;i++){
        document.getElementById('dataEntries').innerHTML+=`<h2>${Object.keys(element)[i]}:${Object.values(element)[i]}</h2>`
    }
    document.getElementById('dataEntries').innerHTML+=`<br><br>`
    number++;
});
