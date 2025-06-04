import {useState} from 'react';

function Ex3(){
    const [mode,setmode]=useState(false)
    function ChangeMode(){
        setmode(mode? false:true)
       if(mode==false){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
        document.body.style.borderColor='white';
       }
       if(mode==true){
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
       }
    }
    return(
    <>
    <div className='Ex3'>
    <label className="switch">
        <input type="checkbox" onClick={ChangeMode} value='dark'/>
        <span className="slider round"></span>
    </label>
    </div>
    </>
    )
}

export default Ex3