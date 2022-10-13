import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'
import { Link } from 'react-router-dom';
import { logout } from '../firebase';
import './dashboard.css'
import Form from './Form/Form';
import Gratitude from './gratitude/Gratitude';
import img from '../Images/layout-wtf.svg';

export default function Dashboard() {
  const auth = getAuth()
  const user = auth.currentUser;
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [text, setText] = useState();
  const [display, setDisplay] = useState('block')

  useEffect(() => {
    // Update the document title using the browser API
    async function aname(){
      if(user){
        setName(user.displayName)
        const br = <br></br>
        setText(user.displayName)
      }else{
        navigate('/')
      }
    }
    aname();
  });

  function Hide(){
    setDisplay('none')
}
  function logOut(){
    signOut(auth)
    navigate('/')
  }
  return (
    <>
      <div className="nav1">
      <i className="bi bi-columns-gap logoI"></i>
        <div>
          <Link to="/about" className="a1" style={{ padding: "0px 8px" }}>
            About
          </Link>
          <a
            className="a1"
            style={{ color: 'white',cursor: 'pointer', padding: "0px 8px" }}
            onClick={logOut}
          >
            Log out
          </a>
        </div>
      </div>
      <div className="conatiner mx-auto">
            <h3 className='h3'>Hi {text}, Good to see you here. Tell us what you are grateful for today.</h3>
      </div>
      <Form></Form>
      <Gratitude></Gratitude>
    </>
  );
}
