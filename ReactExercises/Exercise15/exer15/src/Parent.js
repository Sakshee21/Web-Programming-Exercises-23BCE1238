import React from 'react';
import Child from './Child';
import logo from './logo.svg';
function Parent()
{
    const mail="you@gmail.com";
    const date=new Date().toLocaleString();
    return(
        <>
        <Child url={logo} mail={mail} date={date} />
        </>
    );
}

export default Parent;