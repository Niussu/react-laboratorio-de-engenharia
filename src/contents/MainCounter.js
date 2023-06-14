import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import './styleMainCounter.css';
import {Link} from 'react-router-dom';


function MainCounter() {
    const [NumMan, setNumMan] = useState(0);
    const [NumWoman, setNumWoman] = useState(0);
    const [Total, setTotal] = useState(0);

    function addMan() {
        setNumMan(NumMan + 1);
        setTotal(Total + 1);
    }
    function addWoman() {
        setNumWoman(NumWoman + 1);
        setTotal(Total + 1);
    }
    function addTotal() {
        setTotal(Total + 1);
    }
    function removeWoman() {
        if (NumWoman > 0) {
            setNumWoman(NumWoman - 1);
            setTotal(Total - 1);
        }
    }
    function removeMan() {
        if (NumMan > 0) {
            setNumMan(NumMan - 1);
            setTotal(Total - 1);
        }
    }
    function clearAll() {
        setNumWoman(0);
        setNumMan(0);
        setTotal(0);
    }
    return(
        <>
        <div id='sub3'>
            <p>Total: {Total}</p><br></br>
            <button onClick={clearAll} id='limpar'>Limpar valores</button>
        </div>
        <div id="main">
            <div id="sub">
                <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png'></img>
                <p>Homens: {NumMan}</p>
                <button onClick={addMan} className='verde'>+</button>
                <button onClick={removeMan} className='vermelho'>-</button>
            </div>
                <div id='sub2'>
                <img src="https://cdn-icons-png.flaticon.com/512/145/145852.png" alt="Ícone de mulher"></img>
                <p id='num_mulher'>Mulhers: {NumWoman}</p>
                <button onClick={addWoman} className='verde'>+</button>
                <button onClick={removeWoman} className='vermelho'>-</button>
            </div>
        </div>
        <Link to='/'>Voltar para a home</Link>
        </>
    );
}
export default MainCounter;