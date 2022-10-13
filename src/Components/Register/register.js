import  { React , useState, useEffect} from 'react'
import '../Register/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from '../Navbar/Navbar';
export default function Register() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [type, setType] = useState('password')
  function symbol(){
    setType('')
  }
  const auth1 = getAuth();
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    try{
    registerWithEmailAndPassword(name, email, password);
    navigate('/dashboard')
    }catch(err){
      console.log(err)
    }
  };
  auth1.onAuthStateChanged((user)=>{
    if(user){
    navigate('/dashboard')
    }
  })
  return (
    <>
    <div className='body mx-auto'>
      <Navbar></Navbar>
    <div className='RegLog'>
        <h3>Welcome</h3>
        <div className='form'>
            <label>Name:</label><br></br>
            <input placeholder='Your Name' value={name} onChange={(e)=>{setName(e.target.value)}} ></input><br></br>
            <label>Email:</label><br></br>
            <input placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br></br>
            <label>Password:</label><br></br>
            <input placeholder='Password' type={type} value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <i className="symbol bi bi-eye " onClick={()=> symbol()}></i>
        </div>
        <button className='btn' onClick={register}>Register</button>
        <Link to="/" className='a'>Already Registered?</Link>
    </div>
    </div>
    </>
  )
}
