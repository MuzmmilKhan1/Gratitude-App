import React from 'react'
import grad from '../Images/Gratitude App1.png'
import './about.css'
export default function About() {
  function goBack(){
    window.history.back();
  }
  return (
    <>
    <a className='back' style={{color: 'white'}} onClick={goBack}> &#8249; Back</a>
    <div className='Aboutdiv'>
      <img className='imgabout' src={grad}></img>
      <p>This is a MERN stack app. This is Just a Portfolio Projects.
          The technologies used are Firebase For Authentication and 
          Node Js, Express and MongoDB as a Backend and React as a 
          Frontend Frame Work.</p>
    </div>
    <div className='footer-about'>
      <p>You can contact me at muzmmil.khan16@gmail.com for any kind of queries.</p>
    </div>
    </>
  )
}
