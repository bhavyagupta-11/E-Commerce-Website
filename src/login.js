import React, { useState } from "react";
import './Login.css';
import amazon from "./amazon.png";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login(){
    
    const history=useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const signIn=e=>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email,password)
            .then (
                (auth)=>{
                    //onc the user is authenticated the data is pushed in home page
                   if(auth){
                    history.push('/')
                   }
                }
            )
            .catch(error=>alert(error.message))
    }
    const registar=e=>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then(
                (auth)=>{
                    //it created a new user with emaila dn password
                   if(auth){
                       history.push('/')
                   }
                }
            )
            .catch(error=>alert(error.message))
    }

    return(
        <div className='login'>
        <a href="/">
            <img 
            className="login_logo"
            src={amazon}
            />
        </a>

        <div className="login_container">
            <h1>Sign In</h1>
            <form>
                <h5> E Mail</h5>
                <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

                <h5> Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                <button className="login_signin" type="submit" onSubmit={signIn}>
                    Sign In
                </button>

                <p>
                    by signing in you agree to our terms and conditions.
                </p>

                <button onClick={registar} type="submit" className="login_register">
                    Create Your Account
                </button>
            </form>

        </div>
       </div>
    );
        
}
export default Login;