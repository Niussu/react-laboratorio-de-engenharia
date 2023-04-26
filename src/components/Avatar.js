import React from 'react';
import ReactDOM from 'react-dom/client';

function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';

    return(
        <img className='Avatar' src={avatar} alt={description}></img>
    );
}

export default Avatar;