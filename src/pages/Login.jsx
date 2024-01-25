import React, {  useState } from "react";
import Signuplogo from "../assests/sign.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./login.css";
import axios from "axios";

function Login() {
  const [email,setEmail]= useState('');

  const [password, setPassword]= useState('');

  async function postData( data) {
    try {
      let response = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        data
      );
      console.log(response);
      alert("Login Successfully")
    } catch (error) {
      console.log(error);
    
    }
  }

  const handleOnSubmit= (event)=>{

   
    event.preventDefault()
   

        postData({
         
          email : email,
          password: password
        }) ;

       
    
}
  // const handleOnChange = (e) => {
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="login-page">
      <div className="left-signup">
        <img src={Signuplogo} className="signup-png" alt="" />
      </div>
      <div className="right-login">
        <div className="enter-exclusive">
          <h2 className="exclusive-login">Login in to Exclusive</h2>
          <p className="deal-ent">Enter your details below</p>
        </div>

        <form onSubmit={handleOnSubmit} className="signup-form">
          <input
            value={email}
            className="signup-name"
            placeholder="Enter email or Phone Number"
            name="email"
            onChange={((e)=>setEmail(e.target.value))}
          />
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            
            value={password}
            className="signup-name"
            placeholder="Password"
            onChange={((e)=>setPassword(e.target.value))}
            
          />
           <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="login-show"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>{" "} 
          <div className="login-forgot">
            <button type="submit" className="lo-btn">
              Log In
            </button>
            <Link to="/login/forget-password" className="forg-btn">
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
