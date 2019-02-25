import React from 'react';

const Clicker = ({ handleClick }) => {
    return <div>
        <button onClick={(e) => {handleClick('A');}}>A</button>
        <button onClick={(e) => {handleClick('B');}}>B</button>
        <button onClick={(e) => {handleClick('C');}}>C</button>
    </div>
}

export default Clicker;