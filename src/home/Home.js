import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   const sub= localStorage.getItem('sub')
   const navigate=useNavigate()
   useEffect(()=>{
    if(sub===0||sub===null||sub===undefined){
        navigate("/login")
   }
   },[])
  return (
    <div>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
        <h1>Home Page</h1>
    </div>
  )
}

export default Home