import React, { useState } from 'react'
import { auth, db } from '../app/context/Config'
import { Link, useNavigate } from 'react-router-dom'

export const Signup = (props) => {

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // signup
    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                navigate('/');
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
    }

    return(
          
        <>
       

          <form onSubmit={signup}>
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
                type="username"
                id="text"
                className="form-control mt-1"
                placeholder="Enter  Username"
          
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                value={name}
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
              <span  style={{textAlign:"center" , color:"black"}}>Already have an account? Login
                <Link to="login"> Here</Link>
            </span>
            {error && <span  style={{textAlign:"center" , color:"white", fontWeight:"bold"}} className='error-msg'>{error}</span>}
            </div>
            <div class="form-check form-check-inline">
            
              <label class="form-check-label" for="inlineCheckbox1"></label>
                  </div>
          </div>
          <br/>
        
        )}
              
      
      </div>
        </form>

       
        </>
      )
}

export default Signup;