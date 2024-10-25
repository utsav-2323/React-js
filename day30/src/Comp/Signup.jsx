import React, { useState } from 'react'
import {auth,firestore} from "../../firebaseConfig";
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { doc, setDoc } from 'firebase/firestore';
import '../App.css'

export default function Signup() {
  const [fname,Setfname]=useState("");
  const [lname,Setlname]=useState("");
  const [email,Setemail]=useState("");
  const [pass,Setpass]=useState("");

  const navigate= useNavigate();
  const Signup = () => {
createUserWithEmailAndPassword(auth,email,pass)

.then((user)=>{
console.log(user.user.uid);
setDoc(doc(firestore,"users",user.user.uid),{
  fname,
  lname,
  email,
  pass,
})
.catch((err)=>{
  console.log(err);
});
navigate("/home");
})

  };
  return (
    
    <>
  
 <div className="wrapper1">
    <div className="tital">
    <h2>Sign up</h2>
    </div>
    <div className="inp">
    <input type="text" placeholder="Enter Your Fname"  onChange={(e)=>Setfname(e.target.value)}/>
    <input type="text" placeholder="Enter Your Lname"  onChange={(e)=>Setlname(e.target.value)}/>
    <input type="text" placeholder="Enter Your email address"  onChange={(e)=>Setemail(e.target.value)}/>
    <input type="password" placeholder="Password"  onChange={(e)=>Setpass(e.target.value)}/>
    </div>
    <div className="btn">
    <button  onClick={Signup}>Sign up</button>
    </div>
    <div class="login-link">
    <p><Link className='p' to="/">Login</Link> </p>
    </div> 
                
  </div>
    </>
  )
}
