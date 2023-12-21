import React from 'react'
import './Petlogin.css'
import { Link } from 'react-router-dom';

export default function Petlogin() {
  return (
    
    <div className='division1'>
      <div className='DivForm'>
        <form>
          <br></br>
          <h1> Login </h1>
          <br></br>
          <input type='text' placeholder='Username or Email' required></input>
          <br></br>
          <br></br>
          <input type='password' placeholder='Password' ></input>
          <br></br>
          <br></br>
          < button className='subButton'><Link to='/home'>LOG IN</Link></button>
          <br></br>
          {/* <br></br> */}
          <a>View Our <a href='https://mypetsa.com/adoption-terms-and-conditions/'>Terms of Service</a> and <a href='https://mypetsa.com/adoption-terms-and-conditions/'>Policy</a></a>
          {/* <br></br> */}
          <br></br>
          <bh>Need an account?     
            <Link to='/sig'> Sign up</Link>
            </bh>
        </form>
      </div>
    </div>
  );
}