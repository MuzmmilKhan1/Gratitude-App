import { React, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, logInWithEmailAndPassword } from "../firebase";
import { getAuth } from "firebase/auth";
import './First.css'
import Navbar from '../Navbar/Navbar';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('password')
  function symbol(){
    setType('')
  }
  const navigate = useNavigate();
  const auth1 = getAuth();
  const user = auth1.currentUser;
  auth1.onAuthStateChanged((user)=>{
    if(user){
    navigate('/dashboard')
    }
  })
  return (
    <div className='body mx-auto'>
      <Navbar></Navbar>
    <div className='RegLog'>
        <h3>Welcome</h3>
        <div className='form'>
            <label>Email:</label><br></br>
            <input placeholder='Email' value={email} autoComplete='on'
             onChange={(e)=>{setEmail(e.target.value)}} required={true}></input><br></br>
            <label>Password:</label><br></br>
            <input placeholder='Password' autoComplete='on'
            //  style={{zIndex: '-1'}}
            value={password} type={type} onChange={(e)=>{setPassword(e.target.value)}} required={true}>
            </input>
            <i className="symbol bi bi-eye " onClick={()=> symbol()}></i>
        </div>
        <button className='btn' onClick={() => Login()}>Login</button>
        <Link className='btn' to='/resetPassword'> Forgot Password? </Link>
        <Link to="/register" className='a'>Register Now</Link>
    </div>
    </div>
  )
  function Login(){
  try{
    logInWithEmailAndPassword(email, password)
   } catch(err){
    console.log(err)
   }
  //  catch(error){
//     switch (error.code) {
//        case 'auth/email-already-in-use':
//          console.log(`Email address ${email} already in use.`);
//          break;
//        case 'auth/invalid-email':
//          console.log(`Email address ${email} is invalid.`);
//          break;
//        case 'auth/operation-not-allowed':
//          console.log(`Error during sign up.`);
//          break;
//        case 'auth/weak-password':
//          console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
//          break;
//        default:
//          console.log(error.message);
//          break;
//      }
//  }
}
}
