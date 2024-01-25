import React, { useState } from 'react'
import './signup.css'
import Signuplogo  from '../assests/sign.jpg'
import { Link } from 'react-router-dom';
import googlelogo from '../assests/Icon-Google.png'
import axios from 'axios';
import validator from 'validator'


export const Signup = () => {
    const [name , setName]= useState("");
    // const [email , setEmail]= useState("");
    // const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [password,setPassword] = useState('');

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}





function isValidPhone(phone){
  return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
}

  const handleOnEmailPhoneChange = event => {
    setError(null);
    setMessage(event.target.value);
  };


  async function postData( data) {
    try {
      let response = await axios.post(
        "http://localhost:4000/api/v1/auth/signup",
        data
      );
      console.log(response);
      alert("Form submitted Successfully")
    } catch (error) {
      console.log(error);
      alert("User Allready Exists")
    }
  }

  const handleOnSubmit= (event)=>{

   
    event.preventDefault()
    if (!(isValidEmail(message) || (isValidPhone(message) )) ){
          setError('Email is invalid');
        } else {
          setError(null);
        }

        postData({
          name: name,
          email : message,
          password: password
        }) ;

       
    
}



const [errorMessage, setErrorMessage] = useState('') 
  
    const validate = (value) => { 
  
        if (validator.isStrongPassword(value, { 
            minLength: 8, minLowercase: 1, 
            minUppercase: 1, minNumbers: 1, minSymbols: 1 
        })) { 
            setErrorMessage('Is Strong Password') 
        } else { 
            setErrorMessage('Is Not Strong Password') 
        } 
    } 



  
    return (
       
            <div className="signup-hero">
                <div className="left-signup">
                    <img src={Signuplogo} className='signup-png' alt=""  />

                </div>
                <div className="right-signup">
                     <h1 className='an-acc'>Create an account</h1>
                     <p className='enter-detail'>Enter your details below</p>
                     <form onSubmit={handleOnSubmit} className='signup-form' >
                        <input required type='text' placeholder='Name' value={name} onChange={((e)=>setName(e.target.value))} className='signup-name'/>
                        <input required placeholder='Email or Phone Number' className='signup-name' value={message} onChange={handleOnEmailPhoneChange} />
                        {error && <h3 style={{
                            color:'red'
                        }}>{error}</h3>}
                        <input 
                        required
                        type="password"
                        name="password" className='signup-name'
                        value={password} onChange={((e)=>setPassword(e.target.value))} placeholder='Password'/>
                        {errorMessage === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errorMessage}</span>} 
                        <button type='submit' className='createac-btn '  >Create Account</button>
                      
                     </form>
                     <div className="right-bottom">
                        <div className="sign-google">
                            <img src={googlelogo} alt="googlelogo"  />
                            <p className='up-google'>Sign up with Google </p> 
                        </div>
                        <div className='already'>
                            <p className='al-account'>Already have account</p>
                            <div className="login-route">
                                <Link to="/signup/login" className='login-link'>Login</Link>
                                
                            </div>

                            </div>
                        </div>

                </div>
            </div>
      
    )
}
