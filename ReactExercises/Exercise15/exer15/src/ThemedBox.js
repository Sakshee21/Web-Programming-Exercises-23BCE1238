import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';


function ThemedBox() {
    const { theme } = useContext(ThemeContext);


    const boxStyle = {
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        margin: '20px',
        borderRadius: '8px',
        textAlign: 'center',
    };


    return <div style={boxStyle}>Current Theme: {theme}</div>;
}


export default ThemedBox;