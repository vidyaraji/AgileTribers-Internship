import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import { useState } from 'react'

function Ex9(){
    const [val,setval]=useState(1)
    function decrement(){
        setval(val==1?3:val-1);
    }
    function increment(){
        setval(val==3?1:val+1);
    }
    return(

    <>
    <div style={{width:'25%',marginLeft:'2%'}}>
        <div>
        <img src={img1} width='400px' height={500} className={val==1?'active':'image'}/>
        <img src={img2} width='400px' height={500} className={val==2?'active':'image'}/>
        <img src={img3} width='400px' height={500} className={val==3?'active':'image'}/>
    </div>
    <div style={{display:'flex', justifyContent:'space-around'}}>
        <button onClick={decrement}>⬅️</button>
        <button onClick={increment}>➡️</button>
    </div>
    </div>
    
    
    </>
    )
}
export default Ex9;