import React, { useState } from 'react';


function Formvaleff() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    function handleSubmit(e) {
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email}`);
        setName('');
        setEmail('');
    }


    return (
        <>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}


export default Formvaleff;