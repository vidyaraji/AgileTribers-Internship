import {useState} from 'react';
import styled from 'styled-components';


function Ex2(){
    const [name,setname]= useState('raj')
    const [email,setemail]= useState('abc@gmail.com')
    const [message,setmessage]= useState('write a message')
    function UpdateValue(){
        const name= document.querySelector('.name').value;
        const email= document.querySelector('.email').value;
        const message= document.querySelector('.message').value;
        setname(name);
        setemail(email);
        setmessage(message);
        document.querySelector('.name').value="";
        document.querySelector('.email').value="";
        message= document.querySelector('.message').value="";
        alert('sucessfully updated');
    }
    return(
        <>
        <div style={{margin:'2%'}} className='Ex2'>
        <form>
            <label>Name:</label>
            <input className='name' type='name' /><br/><br/>
            <label>Email:</label>
            <input type='email' className='email'/><br/><br/>
            <label>Message:</label>
            <textarea className='message'></textarea><br/><br/>
        </form>
            <button onClick={UpdateValue}>Update value</button>
            <div className='Ex2Data'>
                 <h1>Entered Data</h1>
            <h3>Name:{name}</h3>
            <h3>Email:{email}</h3>
            <h3>Message:{message}</h3>
            </div>
           
        </div>
        </>
    )
}
export default Ex2;