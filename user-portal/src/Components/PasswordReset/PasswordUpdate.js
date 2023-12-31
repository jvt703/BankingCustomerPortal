import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Section from '../Section/Section';

function PasswordUpdate() {
  const Navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('userId');
  const resetToken = queryParams.get('token');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);

    try {
      const response = await fetch('http://localhost:8081/user/passwordReset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, resetToken:resetToken, updatedPassword: password }),
      });
      console.log(response)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response
      console.log(data)
       Navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
         <div>
      <h2>Password Update for ID: {id}</h2>
      <form className={`needs-validation ${!isInvalid ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">New Password:</label>
          <input 
            minLength={5}
            type="password" 
            className="form-control" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input 
            minLength={5}
            type="password" 
            className={`form-control ${isInvalid ? 'is-invalid' : ''}`} 
            id="confirmPassword" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
          {isInvalid && <div className="invalid-feedback">Passwords do not match</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </Section>
   
  );
}

export default PasswordUpdate;