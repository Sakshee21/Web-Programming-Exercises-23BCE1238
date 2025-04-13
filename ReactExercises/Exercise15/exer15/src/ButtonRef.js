import {useRef} from 'react';


function ButtonRef()
{
    const ref=useRef(null);
    const focusHandler=()=>
    {
        ref.current.focus();
    }
    return(
        <>
        <input type="text" ref={ref}/>
        <br></br>
        <button onClick={focusHandler}>
            Click me!
        </button>
        </>
    );
}


export default ButtonRef;
