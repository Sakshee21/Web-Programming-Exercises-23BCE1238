import React,{useState,useRef} from 'react';


function Formvalref()
{
    const nameref=useRef();
    const emailref=useRef();


    function handleSubmit(e)
    {
        e.preventDefault();


        const name=nameref.current.value;
        const email=emailref.current.value;


        alert(`Name: ${name}\nEmail:${email}`);


        nameref.current.value = '';
        emailref.current.value = '';        
    }
   
    return(
        <>
        <input type="text" name="name" ref={nameref} />
        <br></br>
        <input type="text" name="email" ref={emailref} />
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
        </>
    );
}




export default Formvalref;
