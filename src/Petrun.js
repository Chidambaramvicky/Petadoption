import { BrowserRouter,Link, Route, Routes } from 'react-router-dom';
import React from 'react'
import Petsign from './Project/Petsign';
import Petlogin from './Project/Petlogin';
export default function Petrun() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element=<Petlogin></Petlogin> ></Route>
      <Route path='/signup' element=<Petsign></Petsign> ></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}