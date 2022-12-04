import React, { useState } from 'react'
import { auth } from './context/Config';
import { Link, useNavigate } from 'react-router-dom'

import './App.css';
export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate ()

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
         
            navigate('/home');
        }).catch(err => setError(err.message));
    }

    return(
          
        <>
       
       
       
  
          <form onSubmit={login}>
         <div className="Auth-form-container">
   
          <div className="Auth-form-content">
            <h1 className="Auth-form-title2">2e-systems.airport</h1>
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
           
              <input
                type="email"
                id="email"
                className="form-control mt-1"
                placeholder="Enter email"
         
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
  
            </div>
            <div className="form-group mt-3">
              
              <input
                type="password"
                id="password"
                className="form-control mt-1"
                placeholder="Enter password"
          
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <span style={{textAlign:"center" , color:"black"}}>Dont have account?
                <Link to="signup"> Here</Link>
            </span>
            </div>
            <div class="form-check form-check-inline">
            
              <label class="form-check-label" for="inlineCheckbox1"></label>
                  </div>
                  <br/>
    
          </div>
                
          {error && <span className='error-msg'>{error}</span>}
       
        )}
      
      </div>
        </form>
        
        
        </>
      )
}

export default Login;