import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision} from "@fortawesome/free-solid-svg-icons";
import '../../../css/log/Login.css';
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    var username = 'leap';
    var email = '1WYdD@example.com';
    var password = '123456';
    var confirmPassword = '123456';
    var inputUsername = '';
    var inputEmail = '';
    var inputPassword = '';
    var inputConfirmPassword = '';
    const handleValue = (e) => {
       if(e.target.name === 'username'){
            inputUsername = e.target.value;
       }
       if(e.target.name === 'email'){
            inputEmail = e.target.value;
       }
       if(e.target.name === 'password'){
            inputPassword = e.target.value;
       }
       if(e.target.name === 'confirmPassword'){
            inputConfirmPassword = e.target.value;
       }
    }
    const handleLogin = () =>{
        if(inputUsername === username && inputEmail === email && inputPassword === password && inputConfirmPassword === confirmPassword){
            navigate('/Dashboard');
        }
    }
    return(
     <div className='container-form'>
            <form action="">
                <p className='p-page'><span>Signup</span> | <span onClick={() => {navigate('/Login')}}>Login</span></p>
                <p className='warm-welcome-p'>Ready to be an Otthor member</p>
                <label>Username</label>
                <div className='div-input'>
                    <input type="text" className='username-input' placeholder='Enter Username' onChange={handleValue} name='username'/>
                </div>
                <label>Email</label>
                <div className='div-input'>
                    <input type="email" className='email-input' placeholder='Enter Email' onChange={handleValue} name='email'/>
                </div>
                <label>Password</label>
                <div className='div-input'>
                    <input type="password" className='password-input' placeholder='Enter Password' onChange={handleValue} name='password'/>
                    <FontAwesomeIcon icon={faEyeLowVision} className='show-password-icon'/>
                </div>
                <label>Confirm Password</label>
                <div className='div-input'>
                    <input type="password" className='password-input' placeholder='Confirm Password' onChange={handleValue} name='confirmPassword'/>
                </div>
                <div className='div-input div-checkBox'>
                    <div>
                         <input type="checkbox" />
                    </div>
                    <label>I agree to the <u style={{color:'orange'}}>Terms & Conditions</u></label>
                </div>
                <div className='div-input div-submit'>
                    <button onClick={handleLogin}>Register</button>
                </div>
                <p className='warm-welcome-p'>Alreay a member? <u style={{color:'green', cursor:'pointer'}} onClick={() => {navigate('/Login')}}>Login</u></p>
            </form>
      </div>

    )
}

export default Signup;