import React, { useContext, useState } from 'react'
import './Petlogin.css'
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from './ProjectContext';

export default function Petlogin() {
  const navigate = useNavigate();
  const loginButton = () => {
    login( username );
    console.log(username);
    navigate('/home')
  }
  const { login } = useContext(MyContext);
  const [username, setUsername] = useState('');
  return (

    <div className='division1'>
      <div className='DivForm'>
        <form>
          <br></br>
          <h1> Login </h1>
          <br></br>
          <input type='text' placeholder='Username or Email' required value={username} onChange={(e) => setUsername(e.target.value)}></input>
          <br></br>
          <br></br>
          <input type='password' placeholder='Password' ></input>
          <br></br>
          <br></br>
          < button className='subButton' onClick={loginButton}>LOG IN</button>
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