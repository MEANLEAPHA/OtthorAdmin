import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision, faEye } from "@fortawesome/free-solid-svg-icons";
import '../../../css/log/Login.css';
import {useNavigate} from "react-router-dom";
import { AppContent } from "../../../context/context";
const Login = () => {
    const navigate = useNavigate();
    const { url } = useContext(AppContent);
      const [inputEmail, setInputEmail] = useState("");
      const [inputPassword, setInputPassword] = useState("");
      const [viewPassword, setViewPassword] = useState("password");
      const [eye, setEye] = useState(faEyeLowVision);
   
    const handleValue = (e) => {
    const { name, value } = e.target;
    if (name === "email") setInputEmail(value);
    if (name === "password") setInputPassword(value);
   
  };
    const SubmitLogin = async () => {
    try {
      const response = await fetch(
        `${url}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: inputEmail,
            password: inputPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.status === 201) {
        alert(data.message || "Registration successful!");
        navigate("/Dashboard");
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };

    return(
     <div className='container-form'>
             <form
        onSubmit={(e) => {
          e.preventDefault(); // stop default form submission
          SubmitLogin();
        }}
      >
                <p className='p-page'><span>Login </span> | <span onClick={() => {navigate('/Signup')}}>Sign up</span></p>
                <p className='warm-welcome-p'>Welcome back Otthor member</p>
                <label>Email</label>
                <div className='div-input'>
                    <input type="email" className='email-input' placeholder='Enter Email' required onChange={handleValue}/>
                </div>
                <label>Password</label>
                <div className='div-input'>
                    <input type={viewPassword} className='password-input' placeholder='EnterPassword' required onChange={handleValue}/>
                    <FontAwesomeIcon icon={eye} className='show-password-icon' onClick={() => {setViewPassword(viewPassword === "password" ? "text" : "password"); setEye(viewPassword === "password" ? faEye : faEyeLowVision)}}/>
                </div>
                <div className='div-input div-submit'>
                    <button type="submit">Login</button>
                    <span><u>Forget Password?</u></span>
                </div>
                <p className='warm-welcome-p'>Don't have an account? <u style={{color:'green', cursor:'pointer'}} onClick={() => {navigate('/Signup')}}>Create one</u></p>
            </form>
      </div>

    )
}

export default Login;