import React, {useEffect, useState} from 'react'
import '../Form/form.css'
import axios from 'axios'
import { useForm } from "react-hook-form"
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const [n, setN] = useState('')
    const navigate = useNavigate();
    useEffect(()=>{
      async function name(){
        const auth = getAuth();
        const user = auth.currentUser;
        if(user){
          setN(user.displayName)
        }else{
          navigate('/')
        }
      }
      name();
    },[])
  
  const { register, handleSubmit, setValue , watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    axios.post('http://localhost:8000', {
      data
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    window.location.reload();
  };
  return (
    <div className='gratform mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input style={{display: 'none'}} {...register("Name")}></input>
            <input placeholder='Tell us why your are gratefull for...' autoComplete='off' 
            name="name" min='26' {...register("Example")}>
            </input>
            <div className='btndiv'>
            <button className='bt' type='submit' style={{backgroundColor: 'rgb(182, 0, 24)'}} onClick={() => setValue("Name", "Anonymous")} >Post Anonymously</button>
            <button className='bt bt2' type='submit' onClick={() => setValue("Name", {n})} >Post By My Name</button>
            </div>
        </form>
    </div>
  )
}
