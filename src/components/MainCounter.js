import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import './styleMainCounter.css';



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
        <div id="main">
            <div id="sub">
            <button onClick={addMan}>Adicionar homens {NumMan}</button>
            <button onClick={removeMan}>Remover homens</button>
            </div>
            <button onClick={addWoman}> Adicionar mulheres {NumWoman}</button>
            <button onClick={removeWoman}>Remover mulheres</button>
            <button onClick={addTotal}> Adicionar o total {Total}</button>
            <button onClick={clearAll}>Limpar tudo</button>
        </div>
    );
}
export default MainCounter;