import React, { useState } from 'react'
import { auth } from '../../firebaseConfig'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova'
import '../App.css'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate =useNavigate();

  const login =(()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((user)=>{
      console.log(user);
    })
    .catch((err)=>{
      console.log(err);
    });
    navigate('/home')
  });
  return (
     <div class="login">
        <div className="tital">
        <h2>Login</h2>
        </div>
        <div className="text">
        <input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="smt">
        <button type="submit" onClick={login}>Login</button>
        </div>
        <div class="sign-link">
        <p><Link className='p' to="/signup">Signup</Link> </p>
        </div>
            
    </div>
  )
}
