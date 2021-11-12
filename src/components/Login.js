import React,{useState}from 'react'
import { Link,useHistory} from "react-router-dom";
import amazonwhite from "../images/amazonewhite.png"
import "../css/login.css"
import { auth } from './firebase';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const signIn =(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
                history.push('/');
        })
        .catch(error=>alert(error.message));
    }
    const Register =(e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if(auth){

                history.push('/');
            }
        })
        .catch(error=>alert(error.message));
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
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)}/>

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
