import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Petlogin from './Project/Petlogin';
import Petsign from './Project/Petsign';
export default function Petrun() {
  return (
    <div>
 
 <BrowserRouter>
 <Routes>
  <Route path='/' element=<Petlogin></Petlogin>></Route>
  <Route path='/sig' element=<Petsign></Petsign>></Route>
 </Routes>
 </BrowserRouter>
    </div>
  )
}