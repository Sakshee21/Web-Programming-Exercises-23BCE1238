import React, {useState,useEffect} from  'react';


function Jokes()
{
    const [joke,setJoke]=useState('');
    const [loading,setLoading]=useState(false);

    const fetchJoke = async()=>
    {
        setLoading(true);
        try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        setJoke(`${data.setup} - ${data.punchline}`);
        } catch (error) {
        console.error('Error fetching joke:', error);
        setJoke('Failed to load joke. Try again.');
        } finally {
        setLoading(false);
        }
    };


    useEffect(()=>{
        fetchJoke();
    },[]);


    return(
        <>
        <p>
            {joke}
        </p>


        <button onClick={fetchJoke}>
            Get Another Joke
        </button>
        </>
    );
}
export default Jokes;
