import React, { useState } from 'react';
import HeaderComponent from '../Headercomponent';
import Section from '../Section/Section';
import { useNavigate } from 'react-router-dom';

export function Login({setIsAuthenticated}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [twoFACode, setTwoFACode] = useState('');
    const [warning, setWarning] = useState(' ');
    const [is2FA, setIs2FA] = useState(false); // add state for 2FA screen
    const Navigate = useNavigate();
    const initialLogin = async () => {
        if (email === '' || password === '') {
            setWarning('Please enter a valid login.');
            return;
        }

        try {
            const url = `http://localhost:8081/api/authentication/authenticate`;

            const data = { email, password };
            
            const response = await fetch(url, {
                method: 'POST',   
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            const json = await response.json();
            console.log(json,"herere")
            if (json) {
                setIs2FA(true);
                setWarning('Enter your 2FA code.');
                return;
            }
        } catch (error) {
            console.error('Error:', error);
            setWarning('An error occurred during login. Please try again.');
        }
    }

    const loginWithOTP = async () => {
        if (twoFACode === '') {
            setWarning('Please enter your 2FA code.');
            return;
        }

        try {
            const url = `http://localhost:8081/api/authentication/authenticateOTP`;

            const data = { email, password:twoFACode };
            
            const response = await fetch(url, {
                method: 'POST',   
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
             
                  if (!response.ok) {
                 
              throw new Error("API request failed");
              
            }
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
            setTwoFACode('')  
        }
    }

    const handleLogin = () => {
        if (is2FA) {
            loginWithOTP();
        } else {
            initialLogin();
        }
    }

    return (
         <>
        <HeaderComponent pageName={"Login Page"} pageDescription=""/>
        <Section title="Login">
            <div className="centered align-self-center">
        <form className='card border shadow-0 px-5 pt-5 pb-3' style={{width: "20rem"}}>
        <h4 style={{ marginRight: "auto" }} className='p-2'><strong>{is2FA ? 'Enter 2FA Code' : 'Sign in'}</strong></h4>
        {!is2FA ? (
            <>
            <input className='m-2 p-2' type="text" placeholder="Email address" name="Email address" onChange={(e) => setEmail(e.target.value)}/>
            <input className='m-2 p-2' type="password" placeholder="Password" name="Create password" onChange={(e) => setPassword(e.target.value)}/>
            </>
        ) : (
            <input className='m-2 p-2' type="text" placeholder="2FA Code" name="2FA Code" value={twoFACode} onChange={(e) => setTwoFACode(e.target.value)}/>
        )}
        <div className='p-2' style={{ marginRight: "auto" }} onClick={handleLogin}>
          <button className='btn btn-primary px-4' type="button">{is2FA ? 'Submit' : 'Sign in'}</button>
        </div>
        <p id='warning' style={{color:'red'}}>{warning}</p>
        </form>
      </div>
        </Section>
        </>
    );
}
