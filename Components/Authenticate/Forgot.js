import React from 'react'
import { auth, sendPasswordReset  } from "../firebase";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
 

export default function Forgot() {
    function resetPassword(){
        try{
            sendPasswordReset(email)
            alert("Please Also Check the spam folder of your Email account if you don't see the reset link.")
            navigate('/')
        }catch(err){
            console.log(err)
        }
    }
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
  return (
    <>
    <div className='body mx-auto'>
        <Navbar></Navbar>
        <div className='RegLog'>
            <h1>Reset Password</h1>
            <div className='form'>
            <label>Email:</label><br></br>
            <input placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            </div>
            <button className='btn' onClick={() => resetPassword()}>Login</button>
        </div>
    </div>
    </>
  )
}
