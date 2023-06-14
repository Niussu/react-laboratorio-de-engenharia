import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom';

function TodoList() {
    return(
    <>
        <img src='https://i.imgur.com/yXOvdOSs.jpg' alt='Hedy Lamar' className='foto'></img>
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve the spectrum technology</li>
        </ul>
    </>
    );
}
export default TodoList;
