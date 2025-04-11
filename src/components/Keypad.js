// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function handleInputChange() {
        console.log('Entering password...');
    }
    return (
        <div>
            <h1>Keypad</h1>
            <input type="password" onChange={handleInputChange} />
        </div>
    )
}

export default Keypad;