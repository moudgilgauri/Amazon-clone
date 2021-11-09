import React,{useState}from 'react'
import { Link } from "react-router-dom";
import amazonwhite from "../images/amazonewhite.png"
import "../css/login.css"
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn =(e)=>{
        e.preventDefault();
    }
    const Register =(e)=>{
        e.preventDefault();
    }
    return (
        <div className="login">
        <Link to ="/">
            <img src={amazonwhite} alt="" className="login_logo"/>
        </Link>
            
            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login_signup">Sign In</button>
                </form>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, omnis. Veniam odit nulla laborum rerum, incidunt dolorem repudiandae. Ad, recusandae?</p>

                <button type="submit" onClick={Register} className="login_register">Create your Account</button>
            </div>
        </div>
    )
}
