import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import Nopage from './Nopage';
import Recipe from './Recipe';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} exact/>
            <Route path='/recipe/:recipeId' element={<Recipe />}/>
            <Route path='*' element={<Nopage />}/>
        </Routes>
    </BrowserRouter>
)

export default Router