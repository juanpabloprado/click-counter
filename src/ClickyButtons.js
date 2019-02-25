import React from 'react';

const ClickyButtons = ({ numberOfButtons, onSelection }) => {
    const makeButton = v => <button key={v} id={v} onClick={e => 
        onSelection(e.target.id)}>{v}</button>
    return <div>
        {[...Array(numberOfButtons).keys()].map(i => makeButton(i + 1))}
    </div>
}

export default ClickyButtons;