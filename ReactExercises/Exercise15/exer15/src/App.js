import React, { useState } from 'react';
import './App.css';


function Title(props)
{
  return (
    <>
    <h1 style={
      {
        textAlign: 'center',
        color: 'orange',
        fontSize: '2.5rem',
        fontFamily: 'Arial, sans-serif',
        marginTop: '20px',
        backgroundColor: 'black'
      }
    }>
    {props.title}
    </h1>
    </>
  );
}


function Content()
{
  const jokes = [
    "Why don't skeletons fight each other? They don’t have the guts!",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "Why don’t programmers like nature? It has too many bugs.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
  ];


  const [joke,setjoke]=useState(jokes[0]);
  const generatejoke =() =>
  {
    const ind=Math.floor(Math.random()*jokes.length);
    setjoke(jokes[ind]);
  };


  return(
    <>
    <p style={{ fontSize: '1.5rem', color: '#333' }}>{joke}</p>
    <button onClick={generatejoke}>
      Click to see a joke
    </button>
    </>
  );
}


function Footer()
{
  return(
    <>
    <footer className="footer">
    <p>This is a static footer message.</p>
    </footer>
    
    </>
   
  );
}




function App() {
  const title="Hello!It's a great step beginning to learn react!"
  return (
    <div className="container">
      <div className="content-wrapper">
        <Title title={title} />
        <Content />
      </div>
      <Footer />
    </div>
  );
}


export default App;