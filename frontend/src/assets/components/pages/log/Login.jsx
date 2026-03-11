import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision} from "@fortawesome/free-solid-svg-icons";
import '../../../css/log/Login.css';
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return(
     <div className='container-form'>
            <form action="">
                <p className='p-page'><span>Login </span> | <span onClick={() => {navigate('/Signup')}}>Sign up</span></p>
                <p className='warm-welcome-p'>Welcome back Otthor member</p>
                <label>Email</label>
                <div className='div-input'>
                    <input type="email" className='email-input' placeholder='Enter Email'/>
                </div>
                <label>Password</label>
                <div className='div-input'>
                    <input type="password" className='password-input' placeholder='EnterPassword'/>
                    <FontAwesomeIcon icon={faEyeLowVision} className='show-password-icon'/>
                </div>
                <div className='div-input div-submit'>
                    <button>Login</button>
                    <span><u>Forget Password?</u></span>
                </div>
                <p className='warm-welcome-p'>Don't have an account? <u style={{color:'green', cursor:'pointer'}} onClick={() => {navigate('/Signup')}}>Create one</u></p>
            </form>
      </div>

    )
}

export default Login;