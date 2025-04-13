import React,{useState} from 'react';


function Counterstate()
{
    const [number,setnum]=useState(0);


    const onInc = (event) => {
        event.preventDefault();
        setnum(number+1);  
    };


    const onDec = (event) => {
        event.preventDefault();
        setnum(number-1);
    };


    return(
        <>
        <p>Using USESTATE</p>
        <form>
        <button onClick={onInc}>
            Click here to increment
        </button>
        <br></br>
        <br></br>
        <button onClick={onDec}>
            Click here to decrement
        </button>
        <br></br>
        <br></br>
        <input type="text" name="counter" value={number} readOnly/>
        </form>
        </>
    );
}


export default Counterstate;
