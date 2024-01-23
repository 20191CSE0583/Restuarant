import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import '../styles/Login.css';

const Login = () => {
    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input-container">
                        <AccountCircleIcon />
                        <input type="text" placeholder='Name' />
                    </div>
                )}

                <div className="input-container">
                    <EmailIcon />
                    <input type="email" placeholder='Email Id' />
                </div>

                <div className="input-container">
                    <KeyIcon />
                    <input type="password" placeholder='Password' />
                </div>
                {action === "Sign Up" ? null : (
                    <div className="forgot-password">
                        Forget password?
                        <span> Click Here</span>
                    </div>
                )}

                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
                    <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
                </div>
            </div>
        </div>
    );
}

export default Login;
