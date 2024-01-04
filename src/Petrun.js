import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Aboutt from './Project/Aboutt';
import Adop from './Project/Adop';
import Service from './Project/Service';
import Contact from './Project/Contact';
import Main from './Project/Main';
import Home from './Project/Home';
import Petlogin from './Project/Petlogin';
import Petsign from './Project/Petsign';
import ProjectContext from './Project/ProjectContext';

export default function Petrun() {
  return (
    <div>
      <BrowserRouter>
      <ProjectContext>
        
        <Routes>
          <Route path='/' element={<Petlogin></Petlogin>}></Route>
          <Route path='/sig' element={<Petsign></Petsign>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/adop' element={<Adop></Adop>}></Route>
          <Route path='/ser' element={<Service></Service>}></Route>
          <Route path='/con' element={<Contact></Contact>}></Route>

          {/* <Route path='/about' element={<Aboutt></Aboutt>}></Route> */}
        </Routes>
      </ProjectContext>
      </BrowserRouter>

    </div>
  )
}     
