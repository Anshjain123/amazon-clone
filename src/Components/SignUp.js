import React, { useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const SignUp = () => {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");

    const register = (e) => {
        e.preventDefault(); 
        const name = firstname + " " + lastname; 
        createUserWithEmailAndPassword(auth, email, password)
        .then((authuser)=>{
            updateProfile(authuser.user, {
                displayName: name, 
            })

            console.log(authuser); 
            navigate("/", {state:{name:name}});
        }) 

        .catch((err)=>{
            console.log(err.message); 
        })
    }
    return (
        <div className="signup">

            <img className='signup__logo' onClick={() => navigate("/")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            <div className="signup__container">
                <div className="inner__signup__container">
                    <div className="header__signup">
                        Sign Up
                    </div>
                    <form className="signup__form">
                        <div className="signup__name">
                            <div className="signup__firstname">
                                <label className="label__signup" htmlFor="signup__input__firstname">First name</label>
                                <input type="text" className="signup__input" style={{width:'140px'}} id='signup__input_firstname' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                            </div>
                            <div className="signup__lastname">
                                <label className="label__signup" htmlFor="signup__input__lastname">Last name</label>
                                <input type="text" className="signup__input" style={{width:'140px'}} id='signup__input_lastname' value={lastname} onChange={(e) => setlastname(e.target.value)} />
                            </div>
                        </div>
                        <label className="label__signup" htmlFor="signup__input__email">Enter your email</label>
                        <input type="text" className="signup__input" id='signup__input_email' value={email} onChange={(e) => setemail(e.target.value)} />
                        <label className="label__signup" htmlFor="signup__input__password">Enter your Password</label>
                        <input type="password" className="signup__input" id='signup__input__password' value={password} onChange={(e) => setpassword(e.target.value)} />
                        <button className="signup__continue__button" type='submit' onClick={register}>Continue</button>
                    </form>
                    {/* <label className="label__signup" htmlFor="signup__input">Enter your email</label>
                    <input type="text" className="signup__input" id='signup__input' />
                    <label className="label__signup" htmlFor="signup__input">Enter your email</label>
                    <input type="text" className="signup__input" id='signup__input' />
                    <button className="signup__continue__button">Continue</button> */}
                    <div className="signup_terms_and_conditions">
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </div>

                    {/* <button className="account__creation__button" onClick={register}>
                        Create your Amazon account
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default SignUp