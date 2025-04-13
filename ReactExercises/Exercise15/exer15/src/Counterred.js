import React,{useReducer} from 'react';


function reducer(state,action)
{
    switch(action.type)
    {
        case 'INCREMENT':
            return state+1;
       
        case 'DECREMENT':
            return state-1;


        default:
            return state;
    }
}


function Counterred()
{
    const [state,dispatch]=useReducer(reducer,0);
    return(
        <>
        <p>Using USERED</p>
        <button onClick={()=>dispatch({type:'INCREMENT'})} >
            Click here to increment
        </button>
        <br></br>
        <br></br>
        <button onClick={()=>dispatch({type:'DECREMENT'})} >
            Click here to decrement
        </button>
        <br></br>
        <br></br>
        <input type="text" name="counter" value ={state} readOnly/>
        </>
       
    );
}


export default Counterred;