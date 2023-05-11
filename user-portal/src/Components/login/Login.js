import React, { useState } from 'react';
import HeaderComponent from '../Headercomponent';
import Section from '../Section/Section';
import { useNavigate } from 'react-router-dom';

export function Login({setIsAuthenticated}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warning, setWarning] = useState(' ');
    const Navigate = useNavigate();

const login = async () => {
     if (email === '' || password === '') {
    setWarning('Please enter a valid login.')
    return;
  }

  try {
    const url = process.env.REACT_APP_API_URL;
    
    const data = {
      email: email,
      password: password
    };
    const response = await fetch(url, {
      method: 'POST',   
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const json = await response.json();
    localStorage.setItem('accessToken', json.token);
    localStorage.setItem('refreshToken', json.refreshToken);
    localStorage.setItem('id', json.id);
    setIsAuthenticated(true);
    console.log(json);
    Navigate("/Accounts")
 
  } catch (error) {
    console.error('Error:', error);
    setWarning('An error occurred during login. Please try again.');
  }
};
    return (
         <>
        <HeaderComponent pageName={"Login Page"} pageDescription=""/>
        <Section title="Login">
            <div className="centered align-self-center">
        <form className='card border shadow-0 px-5 pt-5 pb-3' style={{width: "20rem"}}>
        <h4 style={{ marginRight: "auto" }} className='p-2'><strong>Sign in</strong></h4>
        <input className='m-2 p-2' type="text" placeholder="Email address" name="Email address" onChange={(e) => setEmail(e.target.value)}/>
        <input className='m-2 p-2' type="password" placeholder="Password" name="Create password" onChange={(e) => setPassword(e.target.value)}/>
        <div className='p-2' style={{ marginRight: "auto" }} onClick={() => {login()}}>
          <button className='btn btn-primary px-4' type="button">Sign in</button>
        </div>
        <p id='warning' style={{color:'red'}}>{warning}</p>
        </form>
      </div>
        </Section>
        </>
      
    );
}
