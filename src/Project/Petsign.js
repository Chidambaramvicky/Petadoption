import React from 'react';
import './Petsign.css';
import { Link } from 'react-router-dom';

export default function Petsign() {
  return (
    <div className="container">
      <div className="dog">
        <img
          // src="https://media.istockphoto.com/id/1214700549/vector/paw-print-cat-dog-puppy-pet-trace-flat-style-stock-vector.jpg?s=612x612&w=0&k=20&c=pdfWBzh2b5-pmR01CRDzXPyh7zxX9uDfJXCaiiGKwEw="
          src="https://assets.architecturaldigest.in/photos/63888b95a50549a2695e881d/master/pass/gulyas-bianka-3WOh54znPGU-unsplash%20(1).png"
          // src=""
          alt="vic"
          width="130%"
          height="109%"
        />
      </div>
      <div className="main">
        <h1>Sign Up</h1>
        <div className="flex-container">
          <div className="input-group">
            <label>UserName</label>
            <input type="text" />
          </div>
          <div className='input-group'>
            <label>Email</label>
            <input type='password'  />
          </div>
          <div className='input-group'>
            <label>Password</label>
            {/* <button onclick="togglePassword()">Show/Hide</button> */}
            <input type='password' />
          </div>
          <div className='input-group'>
            <label>Mobile Number</label>
            <input type='password' />
          </div>
          {/* Add other input fields similarly */}
        </div>
        
        <div className="but">
          <button><Link to='/'>Sign up</Link></button>
        </div>
      </div>
    </div>
    
  );
}

   
