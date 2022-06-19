import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState(); 
    return (
        <div className="login">
            <img className='login__logo' onClick={() => navigate("/")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            <div className="login__container">
                <div className="inner__login__container">
                    <div className="header__login">
                        Sign In
                    </div>
                    <form className="login__form" type="submit">
                        <label className="label__login" htmlFor="login__input__email">Enter your email</label>
                        <input type="text" className="login__input" id='login__input' value={email} onChange={(e)=>setemail(e.target.value)}/>
                        <label className="label__login" htmlFor="login__input__password">Enter your Password</label>
                        <input type="password" className="login__input" id='login__input__password' value={password} onChange={(e)=>setpassword(e.target.value)} />
                        <button className="login__continue__button" type="submit">Continue</button>
                    </form>
                    {/* <label className="label__login" htmlFor="login__input">Enter your email</label>
                    <input type="text" className="login__input" id='login__input' />
                    <label className="label__login" htmlFor="login__input">Enter your email</label>
                    <input type="text" className="login__input" id='login__input' />
                    <button className="login__continue__button">Continue</button> */}
                    <div className="login_terms_and_conditions">
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </div>
                    <div className="login__divider">
                        <h5>New to Amazon?</h5>
                    </div>
                    <button className="account__creation__button">
                        Create your Amazon account
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login