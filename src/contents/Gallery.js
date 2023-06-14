import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';
import {Link} from 'react-router-dom';

function Gallerry() {
    return(<>
    <h1>Amazing scientists</h1>
    <Profile />
    <Profile />
    <Profile />
    </>);
}
export default Gallerry;
