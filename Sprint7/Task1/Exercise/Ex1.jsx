import React,{useState} from 'react';


function Ex1(){
    const [val, setval]=useState(0);
    function Decrement(){
        setval(val-1)
    }
    function Reset(){
        setval(0)
    }
    function Increment(){
        setval(val+1)
    }
    return(
        <>
        <div style={{margin:'2%'}}>
        <h1>{val}</h1>
        <div>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={Increment}>Increment</button>
        </div>
        </div>
        </>
    )
}
export default Ex1
