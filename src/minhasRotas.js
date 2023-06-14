import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';

import Letreiro from './contents/Letreiro';
import Relogio from './contents/Relogio';

import MainCounter from './contents/MainCounter';

import Gallery from './contents/Gallery';
import TodoList from './contents/TodoList';

import Accordion from './contents/Accordion';
import FormQuiz from './contents/FormQuiz';
import FormTicket from './contents/FormTicket';

const MinhasRotas = () =>{
    return(
        <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/Letreiro' element={<Letreiro />}/>
        <Route path='/Relogio' element={<Relogio />}/>

        <Route path='/MainCounter' element={<MainCounter />}/>

        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/TodoList' element={<TodoList />} />

        <Route path='/Accordion' element={<Accordion />} />
        <Route path='/FormQuiz' element={<FormQuiz />} />
        <Route path='/FormTicket' element={<FormTicket />} />
    </Routes>
</BrowserRouter>
    );
}
 export default MinhasRotas;
