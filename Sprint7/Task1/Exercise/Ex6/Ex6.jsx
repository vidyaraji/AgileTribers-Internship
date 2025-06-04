import DropDown from './DropDown';
import {useState} from 'react'
function Ex6(){
    const[showDropDown, setshowDropDown]=useState(false)
    return(
        <div className='Ex6'>
            <button onClick={()=>setshowDropDown((prev)=>!prev)}>Menu(Ex6)</button>
            {showDropDown && <DropDown/>}
        </div>
        
    )
}
export default Ex6;
