import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return(
        <nav>
            <ul>
                Atividade 1:
                <li><Link to='/Letreiro'>Letreiro</Link></li>
                <li><Link to='/Relogio'>Relogio</Link></li>
            </ul>
            <ul>
                Atividade 2:
                <li><Link to='/MainCounter'>Contador</Link></li>
            </ul>
            <ul>
                Atividade 3:
                <li><Link to='/Gallery'>Galeria</Link></li>
                <li><Link to='/TodoList'>Todo List</Link></li>
            </ul>
            <ul>
                Atividade 5:
                <li><Link to='/Accordion'>Accordion</Link></li>
                <li><Link to='/FormQuiz'>FormQuiz</Link></li>
                <li><Link to='/FormTicket'>FormTicket</Link></li>
            </ul>
        </nav>
    );
}