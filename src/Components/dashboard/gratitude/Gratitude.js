import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './gratitude.css'

export default function Gratitude() {
    const [arr, setArr] = useState([{
        _id: '1',
        gratitude: 'Loading...'}]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios('http://localhost:8000/uploaded')
        .then(function(response){
            let newArray = [];
            newArray.push(response.data);
            setArr(response.data.reverse());
            setLoading(false)
        })
        .catch((err) => {console.log(err)})
    },[])
    const Group = [
        'linear-gradient(120deg, rgba(49,66,83,1) 0%, rgba(26,36,44,1) 100%)',
        'linear-gradient(120deg, rgba(214,70,82,1) 0%, rgba(149,32,68,1) 100%)',
        'linear-gradient(120deg, rgba(15,155,15,1) 0%, rgba(0,0,0,1) 80%)',
        'linear-gradient(120deg, rgba(40,60,134,1) 0%, rgba(69,162,71,1) 80%)',
        'linear-gradient(120deg, rgba(192,57,43,1) 0%, rgba(142,68,173,1) 80%)',
        'linear-gradient(120deg, rgba(21,153,87,1) 0%, rgba(21,87,153,1) 80%)',
        'linear-gradient(120deg, rgba(28,181,224,1) 0%, rgba(0,0,0,1) 80%)',
        'linear-gradient(120deg, rgba(235,87,87,1) 20%, rgba(0,0,0,1) 100%)',
        'linear-gradient(120deg, rgba(107, 0, 145,1) 15%, rgba(203,10,212,1) 100%)'
    ];
    if(arr != null){
    return (
    <div>
        {arr.map(arr =>
            <div key={arr._id}>
                <div className='gradp'>
                    <div className="card-body mx-auto my-4 grad" 
                    style={{background: Group[Math.floor(Math.random()*9)], border: 'none'}}
                    >
                        <blockquote className="blockquote">
                        <p>{arr.gratitude}</p>
                        <footer className="blockquote-footer float-right cite"><cite title="Source Title"> {arr.name}</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>    )}
    </div>
  )
}}
